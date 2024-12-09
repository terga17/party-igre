<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('game_sessions', function (Blueprint $table) {
            $table->id();
            $table->ipAddress('session_ip');
            $table->integer('session_port');
            $table->string('session_name')->unique();
            $table->boolean('is_active');
            $table->unsignedBigInteger('host_id');  // Add host_id as an unsigned big integer
            $table->foreign('host_id') // Add the foreign key constraint
                ->references('id')   // References the 'id' column on the 'users' table
                ->on('users')        // Specifies the 'users' table
                ->onDelete('cascade'); // Adds cascade delete behavior
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('game_sessions');
    }
};
