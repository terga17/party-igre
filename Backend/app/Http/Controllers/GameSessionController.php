<?php

namespace App\Http\Controllers;
use App\Models\GameSession;
use App\Models\User;

use Illuminate\Http\Request;

class GameSessionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $gameSessions = GameSession::all();
        return response()->json([
            'data' => $gameSessions
        ], 200); // 201 status code for created resource
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        echo "Create a game session!";
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        // Validate incoming request

        $validated = $request->validate([
            'session_name' => 'required|string|max:255',
            'session_ip' => 'required|ip',
            'session_port' => 'required|integer',
            'host_id' => 'required',
        ]);
        

        $host = User::find($validated['host_id']); // Find the user by ID
        if ($host == null){
            return response()->json([
                'host' => $host
            ], 404);
        }

               // Find the host user (optional)
        // Create a new game session and assign the host
        if ($host->hostedGameSession != null) {
            return response()->json([
                'message' => 'A game session is already hosted by this user.',
                'hostedGameSession' => $host->hostedGameSession
            ], 409); // 409 Conflict status code indicates a conflict, in this case, an existing game session
        }
        

        $gameSession = GameSession::create([
            'session_name' => $validated['session_name'],
            'session_ip' => $validated['session_ip'],
            'session_port' => $validated['session_port'],
            'is_active' => true, // Assuming the session is active by default
            'host_id' => $host->id, // Assigning the host to the game session
        ]);

        // Return a JSON response with the created session and the host
        return response()->json([
            'message' => 'Game session created successfully.',
            'game_session' => $gameSession,
            'host' => $host,
        ], 201);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        dd($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        dd($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        dd($request);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        dd($id);

    }
}
