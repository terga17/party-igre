<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GameQuestion extends Model
{    
    protected $table = 'questions';

    protected $fillable = [
        'content',
        'type',
        'intensity',
        'game_id'
    ];
}
