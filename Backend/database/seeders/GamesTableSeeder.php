<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GamesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('games')->insert([
            'name' => 'Never have I ever',
            'description' => "Have you? Haven't you? Tell us!",
            'min_players' => 1,
        ]);

        DB::table('games')->insert([
            'name' => 'Tic Tac Toe',
            'description' => 'Classic Tic Tac Toe game as we all know and love.',
            'max_players' => 2,
            'min_players' => 2,
        ]);

        DB::table('games')->insert([
            'name' => 'Truth or Dare',
            'description' => 'Feeling truthful or daring?',
            'min_players' => 1,
        ]);

        DB::table('games')->insert([
            'name' => 'Who drives the bus',
            'description' => 'Wroom wroom, the party bus is in town!',
        ]);
    }
}
