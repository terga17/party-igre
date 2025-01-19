<?php

namespace App\Http\Controllers;

use App\Models\FriendRequest;
use App\Models\User;
use Illuminate\Http\Request;

class FriendRequestController extends Controller
{
    public function showPendingRequests($userId)
    {
        // Get all pending friend requests where the user is the receiver
        $pendingRequests = FriendRequest::where('receiver_id', $userId)
            ->where('status', 'pending') // Filter for pending requests
            ->get();

        // Check if there are pending requests
        if ($pendingRequests->isEmpty()) {
            return response()->json(['message' => 'No pending friend requests.'], 200);
        }

        // Return the pending friend requests
        return response()->json(['pending_requests' => $pendingRequests], 200);
    }

    // Send a friend request
    public function sendRequest($senderId, $receiverId)
    {
        // Find both users
        $sender = User::findOrFail($senderId);
        $receiver = User::where('username', $receiverId)->first();
        if (!$receiver){
            $receiver = User::findOrFail($receiverId);
        }

        if ($sender->isFriend($receiver)){
            return response()->json(['message' => 'You are already friends.'], 400);
        };
        // Prevent sending a request to oneself
        if ($sender->id === $receiver->id) {
            return response()->json(['message' => 'You cannot send a friend request to yourself.'], 400);
        }

        // Check if a friend request exists between sender and receiver
        $friendRequest = FriendRequest::where('sender_id', $receiver->id)
            ->where('receiver_id', $senderId)
            ->first();  // Retrieve the first matching request (use firstOrFail() if you want an exception if not found)
        if ($friendRequest) {
            // If a request exists, call acceptRequest with the request's id
            return $this->acceptRequest($senderId, $friendRequest->id); // Pass the request id here
        }

        // Check if a request already exists
        if (FriendRequest::where('sender_id', $senderId)->where('receiver_id', $receiver->id)->exists()) {
            return response()->json(['message' => 'Friend request already sent.'], 400);
        }

        FriendRequest::create([
            'sender_id' => $senderId,
            'receiver_id' => $receiver->id,
        ]);

        return response()->json(['message' => 'Friend request sent successfully.'], 201);
    }



    public function addUserFriend(string $userId, string $friendId)
    {
        try {
            // Attempt to find the user and friend by their IDs
            $user = User::findOrFail($userId);
            $friend = User::findOrFail($friendId);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            // Handle the case where the user or friend is not found
            return response()->json([
                'message' => 'User or Friend not found.',
            ], 404); // Return 404 Not Found
        }

        // Add the friend to the user
        return $user->addFriend($friend);
    }

    public function removeUserFriend(string $userId, string $friendId)
    {
        try {
            // Attempt to find the user and friend by their IDs
            $user = User::findOrFail($userId);
            $friend = User::findOrFail($friendId);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            // Handle the case where the user or friend is not found
            return response()->json([
                'message' => 'User or Friend not found.',
            ], 404); // Return 404 Not Found
        }

        // Add the friend to the user
        return $user->removeFriend($friend);
    }


    // Accept a friend request
    public function acceptRequest($receiverId, $requestId)
    {
        $friendRequest = FriendRequest::findOrFail($requestId);

        // Check if the request belongs to the specified receiver
        if ($friendRequest->receiver_id !== (int) $receiverId) {
            return response()->json(['message' => 'Unauthorized action.'], 403);
        }

        $friendRequest->update(['status' => 'accepted']);

        // Optionally add them to each other's friends lists
        $this->addUserFriend($friendRequest->sender_id, $friendRequest->receiver_id);

        return response()->json(['message' => 'Friend request accepted.']);
    }

    public function rejectRequest($receiverId, $requestId)
    {
        $friendRequest = FriendRequest::findOrFail($requestId);

        // user cancels the friend request
        if ($friendRequest->sender_id === (int) $receiverId){
            $friendRequest->delete();
            return response()->json(['message' => 'Canceled friend request.'], 403);

        }
        // Check if the request belongs to the specified receiver
        if ($friendRequest->receiver_id !== (int) $receiverId) {
            return response()->json(['message' => 'Unauthorized action.'], 403);
        }

        $friendRequest->update(['status' => 'rejected']);
        $this->removeUserFriend($receiverId, $friendRequest->sender_id);
        return response()->json(['message' => 'Friend request rejected.']);
    }
}
