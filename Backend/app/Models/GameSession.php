<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class GameSession extends Model
{
    protected $fillable = [
        'session_name',
        'session_ip',
        'session_port',
        'is_active',
        'host_id'
    ];


    public function host(): BelongsTo
    {
        return $this->belongsTo(User::class, 'host_id');
    }

}

