<?php

namespace App\Http\Controllers;

use App\Models\Game;
use App\Models\User;
use Illuminate\Http\Request;
use App\Models\GameQuestion; //

class GamesController extends Controller
{   
    public function index(){
        $games = Game::all();

        // Return the list of users as a JSON response
        return response()->json([
            'games' => $games
        ]);    
    }

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

    public function incrementGamesPlayed($gameId, $userId)
    {
        $playedGame = Game::findOrFail($gameId);

        $user = User::findOrFail($userId);

        $pivotExists = $playedGame->players()->where('user_id', $user->id)->exists();
        if ($pivotExists) {
            // Update the existing pivot record (increment rounds_played)
            $playedGame->players()->updateExistingPivot($user->id, [
                'rounds_played' => \DB::raw('rounds_played + 1'),
            ]);
        } else {
            // Create a new pivot record with rounds_played set to 1
            $playedGame->players()->attach($user->id, [
                'rounds_played' => 1,
            ]);
        }

        return response()->json([
            'message' => 'Games played count updated successfully.',
            'game_id' => $playedGame->id,
            'user_id' => $user->id,
        ]);
    }

    public function getGamesPlayedCount($gameId, $userId)
    {
        // Retrieve the game by its ID
        $playedGame = Game::findOrFail($gameId);

        // Check if the user is associated with this game
        $pivotEntry = $playedGame->players()->where('user_id', $userId)->first();

        if ($pivotEntry) {
            // Return the number of games played (i.e., rounds_played)
            return response()->json([
                'games_played' => $pivotEntry->pivot->rounds_played,
            ]);
        } else {
            // If no pivot entry exists, the user hasn't played the game
            return response()->json([
                'games_played' => 0,
            ]);
        }
    }

    public function getVotersAndTotalScore($gameId)
{
    $game = Game::findOrFail($gameId);

    $totalScore = 0;
    $votersCount = 0;

    foreach ($game->players as $player) {
        if ($player->pivot->rating) {
            $totalScore += $player->pivot->rating;
            $votersCount++;
        }
    }
    $game->total_ratings = $totalScore;
    $game->total_voters = $votersCount;
    $game->save(); 
}

    public function rateGame($gameId, $userId, int $rating) {
        $playedGame = Game::findOrFail($gameId);
        $user = User::findOrFail($userId);

        $pivotEntry = $playedGame->players()->where('user_id', $userId)->first();

        if (!$pivotEntry) {
            return response()->json(['message' => 'User is not associated with this game.'], 404);
        }

        if (!($rating >= 0 and $rating <= 5)) {
            return response()->json(['message' => 'Invalid rating.'], 404);
        }
        $pivotEntry->pivot->rating = $rating;
        $pivotEntry->pivot->save();   
        $this->getVotersAndTotalScore($gameId);
        return response()->json(['message' => 'Rating updated.']);
        
        
    }

}
