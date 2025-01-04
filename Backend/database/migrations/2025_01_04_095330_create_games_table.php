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
        Schema::create('games', function (Blueprint $table) {
            $table->id(); // Primary key
            $table->string('name'); // Name of the game
            $table->text('description')->nullable(); // Description of the game
            $table->integer('max_players')->nullable(); // Maximum number of players
            $table->integer('min_players')->nullable(); // Minimum number of players
            $table->timestamps(); // Created at and updated at timestamps
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('games');
    }
};
