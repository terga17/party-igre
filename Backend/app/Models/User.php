<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\HasOne;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'username',
        'password',
        'about_me',
        'profile_picture'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    // A user can have many friends (through the pivot table)
    public function friends()
    {
        return $this->belongsToMany(User::class, 'friends', 'user_id', 'friend_id')
            ->withTimestamps();  // Optionally include timestamps
    }

    // A user can check for mutual friends or add a friend through the pivot table
    public function addFriend(User $friend)
    {
        // Check if the friendship already exists in either direction
        if (!$this->isFriend($friend)) {
            // Add both directions to make the friendship bidirectional
            $this->friends()->attach($friend->id);
            $friend->friends()->attach($this->id);
        }
    }

    // A user can remove a friend from the list
    public function removeFriend(User $friend)
    {
        // Remove both directions to remove the bidirectional friendship
        $this->friends()->detach($friend->id);
        $friend->friends()->detach($this->id);  // Remove a friend
    }

    // Check if two users are friends
    public function isFriend(User $friend)
    {
        return $this->friends()->where('friend_id', $friend->id)->exists();
    }

    public function hostedGameSession(): HasOne
    {
        return $this->hasOne(GameSession::class, 'host_id');
    }

}
