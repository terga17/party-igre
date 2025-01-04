<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\GameSession;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        $this->call(GamesTableSeeder::class);
        
        $u1 = User::create([
            'username' => 'Testni user1',
            'password' => bcrypt('geslo1234'),
        ]);


        $u2 = User::create([
            'username' => 'Testni prijatelj1',
            'password' => bcrypt('geslo1234'),
        ]);

        $u1->addFriend($u2);


        // sessons:
        $gameSession = new GameSession(['session_name' => 'Chess Match']);
        $u1->hostedGameSession()->save($gameSession);

        $gameSession = GameSession::find(1);
        $host = $gameSession->host; // Retrieves the related User

    }
}
