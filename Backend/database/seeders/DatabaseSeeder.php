<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        
        $u1 = User::create([
            'username' => 'Testni user1',
            'password' => bcrypt('geslo1234'),
        ]);


        $u2 = User::create([
            'username' => 'Testni prijatelj1',
            'password' => bcrypt('geslo1234'),
        ]);

        $u1->addFriend($u2);

    }
}
