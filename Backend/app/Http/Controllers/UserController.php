<?php

namespace App\Http\Controllers;
use App\Models\User;

use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Retrieve all users from the database
        $users = User::all();

        // Return the list of users as a JSON response
        return response()->json([
            'users' => $users
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $username)
    {
        $user = User::find($username);

        // If user by ID is not found, try to find by username
        if (!$user) {
            $user = User::where('username', $username)->firstOrFail();
        }
        return $user;

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }


    public function showHostSession(string $userId)
    {
        // Find the user by ID
        $user = User::findOrFail($userId);

        // Retrieve all game sessions where the user is the host
        $gameSession = $user->hostedGameSession;

        // Return the game sessions as a JSON response
        return response()->json([
            'game_sessions' => $gameSession
        ]);
    }

    public function showFriends(string $userId)
    {
        $user = User::with('friends')->findOrFail($userId); // Eager load friends

        return response()->json([
            'user' => $user,
        ], 201);
    }


    public function removeUserFriend(string $userId, string $friendId)
    {

        
        try {
            $user = User::findOrFail($userId);
            //first check for username
            $friend = User::where('username', $friendId)->first();
            if (!$friend){
                $friend = User::findOrFail($friendId);
            }

            if ($user == $friend) {
                return response()->json([
                    'message' => 'You cannot remove yourself as a friend.',
                ], 400);  // Return 400 Bad Request
            }


        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            // Handle the case where the user or friend is not found
            return response()->json([
                'message' => 'User or Friend not found.',
            ], 404); // Return 404 Not Found
        }

        // Add the friend to the user
        return $user->removeFriend($friend);
    }
}
