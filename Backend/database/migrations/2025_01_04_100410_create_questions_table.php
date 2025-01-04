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
        Schema::create('questions', function (Blueprint $table) {
            $table->id(); // Primary key
            $table->string('content'); // The question or dare
            $table->string('type'); // Type: question or dare
            $table->integer('level')->default(1); // Intensity level
            $table->unsignedBigInteger('game_id'); // Foreign key for the game
            $table->timestamps();

            // Define the foreign key constraint
            $table->foreign('game_id')->references('id')->on('games')->onDelete('cascade');
        
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('questions');
    }
};
