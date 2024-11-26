<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('friends', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');  // First user
            $table->unsignedBigInteger('friend_id');  // Second user (the friend)
        
            $table->timestamps();
        
            // Ensure each friendship is unique, i.e., no duplicate friendships
            $table->unique(['user_id', 'friend_id']);
            $table->unique(['friend_id', 'user_id']);  // This ensures the friendship is bidirectional
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('friend_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('friends');
    }
};
