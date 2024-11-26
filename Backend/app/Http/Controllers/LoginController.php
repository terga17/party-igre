<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function userExists($username)
    {
        return User::where('username', $username)->exists();
    }


    public function loginUser(Request $request)
    {
        try {
            // Validate the incoming data
            $validated = $request->validate([
                'username' => 'required|string|max:255',
                'password' => 'required|string|min:4',
            ]);
    
            // Proceed with user registration logic...
        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'Validation failed.',
                'errors' => $e->errors(),
            ], 422); // Unprocessable Entity
        }

        $user = User::where('username', $validated['username'])->first();
        
        if ($user && Hash::check($validated['password'], $user->password)) {
            // Password matches
            return response()->json([
                'message' => 'Login successful!',
                'user' => [
                    'id' => $user->id,
                    'username' => $user->username,
                    'created_at' => $user->created_at,
                ],
            ], 200);
        }

        return response()->json([
            'message' => 'Invalid username or password.',
        ], 401);

    }

    public function registerUser(Request $request)
    {
        // Validate the incoming data
        try {
            // Validate the incoming data
            $validated = $request->validate([
                'username' => 'required|string|max:255',
                'password' => 'required|string|min:4',
            ]);
    
            // Proceed with user registration logic...
        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'Validation failed.',
                'errors' => $e->errors(),
            ], 422); // Unprocessable Entity
        }

        // Check if the user already exists
        if ($this->userExists($validated['username'])) {
            return response()->json([
                'message' => "User already exists."
            ], 400); // Return an error response with 400 status
        }

        // If the user does not exist, create the user
        $user = User::create(attributes: [
            'username' => $validated['username'],
            'password' => bcrypt($validated['password']),
        ]);

        // Return a success response
        return response()->json([
            'message' => 'User registered successfully!',
            'user' => $user,
        ], 201); // Return a 201 status indicating successful creation

    }

    public function users()
    {
        $friends = User::where('username', 'Testni user1')
            ->firstOrFail()
            ->friends()
            ->pluck('username');

        dd($friends);

    }
}
