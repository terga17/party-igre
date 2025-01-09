<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\GameQuestion; //

class GamesController extends Controller
{
    public function getAllQuestions()
    {
        $questions = GameQuestion::all();
        return response()->json($questions);
    }

    public function getRandomQuestion(Request $request)
    {
        $validated = $request->validate([
            'level' => 'nullable|integer'  // Optional level parameter
        ]);

        $query = GameQuestion::query();
        if (!empty($validated['level'])) {
            $query->where('level', $validated['level']);
        }

        // Retrieve a random question from the 'questions' table
        $question = $query->inRandomOrder()->first();

        // Check if the question exists
        if ($question) {
            return response()->json([
                'question' => $question
            ]);
        } else {
            return response()->json([
                'message' => 'No questions found'
            ], 404);
        }
    }
    public function getTruth(Request $request)
    {
        $validated = $request->validate([
            'level' => 'nullable|integer'  // Optional level parameter
        ]);

        // Build query to filter by game_id, type, and optional level
        $query = GameQuestion::where('game_id', 3)
            ->where('type', 'Truth');

        if (!empty($validated['level'])) {
            $query->where('level', $validated['level']);
        }

        $question = $query->inRandomOrder()->first();

        if ($question) {
            return response()->json([
                'question' => $question
            ]);
        } else {
            return response()->json([
                'message' => 'No questions found for the specified game_id and type'
            ], 404);
        }
    }
    public function getDare(Request $request)
    {
        $validated = $request->validate([
            'level' => 'nullable|integer'  // Optional level parameter
        ]);

        // Build query to filter by game_id, type, and optional level
        $query = GameQuestion::where('game_id', 3)
            ->where('type', 'Dare');

        if (!empty($validated['level'])) {
            $query->where('level', $validated['level']);
        }

        $question = $query->inRandomOrder()->first();

        if ($question) {
            return response()->json([
                'question' => $question
            ]);
        } else {
            return response()->json([
                'message' => 'No questions found for the specified game_id, type, and level'
            ], 404);
        }
    }

    public function getQuestion(Request $request)
    {
        $validated = $request->validate([
            'level' => 'nullable|integer'  // Optional level parameter
        ]);

        $query = GameQuestion::where('game_id', 1)
            ->where('type', 'Question');


        if (!empty($validated['level'])) {
            $query->where('level', $validated['level']);
        }

        $question = $query->inRandomOrder()->first();

        if ($question) {
            return response()->json([
                'question' => $question
            ]);
        } else {
            return response()->json([
                'message' => 'No questions found for the specified game_id and type'
            ], 404);
        }
    }

}
