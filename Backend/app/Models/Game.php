<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    protected $fillable = [
        'name',
        'description',
        'max_players',
        'min_players',
        'total_ratings',
        'total_voters',
    ];

    /**
     * The players that belong to the game.
     */
    public function players()
    {
        return $this->belongsToMany(User::class, 'game_user')
            ->withPivot('rounds_played')
            ->withTimestamps();
    }

    /**
     * Get the average rating for the game.
     */
    public function getAverageRatingAttribute()
    {
        return $this->total_voters > 0
            ? $this->total_ratings / $this->total_voters
            : 0;
    }


}
