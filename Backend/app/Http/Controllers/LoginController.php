<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function store(Request $request)
    {
        // Validate incoming data
        $validated = $request->validate([
            'username' => 'required|string|max:255',
            'password' => 'required|string|min:4',
        ]);

        // Create a new user using the validated data
        $user = User::create([
            'username' => $validated['username'],
            'password' => bcrypt($validated['password']),
        ]);

        // Optionally return a response
        dd($request);
        return response()->json([
            'message' => 'User registered successfully!',
            'user' => $user,
        ], 201);
    }
}
