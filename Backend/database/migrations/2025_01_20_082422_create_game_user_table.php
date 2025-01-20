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
         Schema::create('game_user', function (Blueprint $table) {
            $table->id(); // Primary key
            $table->foreignId('game_id')->constrained()->cascadeOnDelete(); // Foreign key for games
            $table->foreignId('user_id')->constrained()->cascadeOnDelete(); // Foreign key for users
            $table->unsignedInteger('rounds_played')->default(0); // Tracks how many rounds the user played
            $table->timestamps(); // Created at and updated at timestamps
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('game_user');
    }
};
