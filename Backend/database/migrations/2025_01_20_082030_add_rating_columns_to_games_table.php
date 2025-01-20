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
        Schema::table('games', function (Blueprint $table) {
            $table->unsignedInteger('total_ratings')->default(0)->after('min_players'); // Total sum of all ratings
            $table->unsignedInteger('total_voters')->default(0)->after('total_ratings'); // Number of players who voted
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('games', function (Blueprint $table) {
            $table->dropColumn(['total_ratings', 'total_voters']);
        });
    }
};
