<?php

namespace App\Http\Controllers;

use App\Models\FriendRequest;
use App\Models\User;
use Illuminate\Http\Request;

class FriendRequestController extends Controller
{
    // Send a friend request
    public function sendRequest($senderId, $receiverId)
    {
        // Find both users
        $sender = User::findOrFail($senderId);
        $receiver = User::findOrFail($receiverId);

        // Prevent sending a request to oneself
        if ($sender->id === $receiver->id) {
            return response()->json(['message' => 'You cannot send a friend request to yourself.'], 400);
        }

        // Check if a request already exists
        if (FriendRequest::where('sender_id', $senderId)->where('receiver_id', $receiverId)->exists()) {
            return response()->json(['message' => 'Friend request already sent.'], 400);
        }

        FriendRequest::create([
            'sender_id' => $senderId,
            'receiver_id' => $receiverId,
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


    // Accept a friend request
    public function acceptRequest($receiverId, $requestId)
    {
        $friendRequest = FriendRequest::findOrFail($requestId);

        // Check if the request belongs to the specified receiver
        if ($friendRequest->receiver_id !== (int)$receiverId) {
            return response()->json(['message' => 'Unauthorized action.'], 403);
        }

        $friendRequest->update(['status' => 'accepted']);

        // Optionally add them to each other's friends lists
        $this->addUserFriend($friendRequest->sender_id, $friendRequest->receiver_id);

        return response()->json(['message' => 'Friend request accepted.']);
    }
}
