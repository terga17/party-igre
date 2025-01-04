<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\GameQuestion; //

class GamesController extends Controller
{
    public function getAllQuestions(){
        $questions = GameQuestion::all();
        return response()->json($questions);
    }

    public function getRandomQuestion()
    {
        // Retrieve a random question from the 'questions' table
        $question = GameQuestion::inRandomOrder()->first();

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
    public function getTruth(){
        $question = GameQuestion::where('game_id', 3)
        ->where('type', "Truth")
        ->inRandomOrder()
        ->first();

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
    public function getDare(){
        $question = GameQuestion::where('game_id', 3)
        ->where('type', "Dare")
        ->inRandomOrder()
        ->first();

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

    public function getQuestion(){
        $question = GameQuestion::where('game_id', 1)
        ->where('type', "Question")
        ->inRandomOrder()
        ->first();
        
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
