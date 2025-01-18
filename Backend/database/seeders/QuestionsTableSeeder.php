<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class QuestionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('questions')->insert([
            [
                'level' => 2,
                'content' => 'Never have I ever lied to my best friend.',
                'type' => 'Question',
                'game_id' => 1, // Assuming this corresponds to 'Never have I ever'
            ],
            [
                'level' => 1,
                'content' => 'Do a silly dance for 30 seconds.',
                'type' => 'Dare',
                'game_id' => 3, // Assuming this corresponds to 'Truth or Dare'
            ],
        ]);

        $json = '[ 
            {
                "level": "2",
                "content": "I dare you to Stand up for 2 turns",
                "type": "Dare",
                "game_id": 3
            },
            {
                "level": "2",
                "content": "I dare you to do 10 pushups with one hand in less than a minute",
                "type": "Dare",
                "game_id": 3
            },
            {
                "level": "2",
                "content": "What actor/actress do you prefer?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "3",
                "content": "Who is your secret crush?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "0",
                "content": "What is the most disgusting thing you have ever done?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "2",
                "content": "I dare you to do a headstand for 2 mins",
                "type": "Dare",
                "game_id": 3
            },
            {
                "level": "3",
                "content": "What is your biggest fear in a relationship?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "2",
                "content": "What was your funniest first date ever?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "3",
                "content": "What is your biggest turn off in a partner?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "0",
                "content": "What is your weirdest habit?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "3",
                "content": "How many kids would you like to have?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "3",
                "content": "What is the perfect first date?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "0",
                "content": "What is one embarrassing fact I should know about you?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "2",
                "content": "What was your childhood nickname?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "2",
                "content": "What is your favourite movie?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "3",
                "content": "Describe your worst date ever?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "2",
                "content": "If there was no such thing as money, what would you do with your life?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "2",
                "content": "What is your favourite food?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "2",
                "content": "What are your three favourite colours, and why?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "2",
                "content": "What is your dream job?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "2",
                "content": "If you were trapped on an island for 3 days, what would you take with you?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "2",
                "content": "Who is your favourite person and why?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "2",
                "content": "Do you prefer apple or android?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "1",
                "content": "How do you put your toilet paper on the roll?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "2",
                "content": "What is your best talent?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "3",
                "content": "Do you believe in love at first sight?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "3",
                "content": "Do you believe in love at all?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "3",
                "content": "What is your dream wedding?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "3",
                "content": "Would you ever consider being a nudist?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "1",
                "content": "How do you feel about end pieces of a loaf of bread?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "1",
                "content": "Can you touch your tongue to your nose?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "2",
                "content": "If you could take away one bad thing in the world, what would it be?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "2",
                "content": "What is your guilty pleasure?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "2",
                "content": "What is the most exotic food that you have ever eaten?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "2",
                "content": "What country would like to live in if you had the chance?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "2",
                "content": "If you could change one thing on your body, what would it be?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "2",
                "content": "What do you daydream about the most?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "0",
                "content": "Describe the weirdest dream you have ever had?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "1",
                "content": "Can you lick your elbow?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "2",
                "content": "What is your favourite season of the year?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "2",
                "content": "Could you go a week without junk food?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "3",
                "content": "How was your first kiss?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "3",
                "content": "Describe your worst kiss ever?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "2",
                "content": "Do you like to exercise?",
                "type": "Truth",
                "game_id": 3
            },
            {
                "level": "2",
                "content": "Do an impression of your favorite celebrity",
                "type": "Dare",
                "game_id": 3
            },
            {
                "level": "2",
                "content": "Never have I ever snooped through someone else’s phone.",
                "type": "Question",
                "game_id": 1
            },
            {
                "level": "2",
                "content": "Never have I ever skipped school.",
                "type": "Question",
                "game_id": 1
            },
            {
                "level": "1",
                "content": "Never have I ever pretended to know a stranger.",
                "type": "Question",
                "game_id": 1
            },
            {
                "level": "3",
                "content": "Never have I ever had a one-night stand.",
                "type": "Question",
                "game_id": 1
            },
            {
                "level": "2",
                "content": "Never have I ever cheated on a test.",
                "type": "Question",
                "game_id": 1
            },
            {
                "level": "1",
                "content": "Never have I ever fallen asleep in public.",
                "type": "Question",
                "game_id": 1
            },
            {
                "level": "2",
                "content": "Never have I ever cried during a movie.",
                "type": "Question",
                "game_id": 1
            },
            {
                "level": "3",
                "content": "Never have I ever gone skinny dipping.",
                "type": "Question",
                "game_id": 1
            },
            {
                "level": "3",
                "content": "Never have I ever dated more than one person at once.",
                "type": "Question",
                "game_id": 1
            },
            {
                "level": "2",
                "content": "Never have I ever lied about my age.",
                "type": "Question",
                "game_id": 1
            },
            {
                "level": "1",
                "content": "Never have I ever forgotten someone’s name immediately after meeting them.",
                "type": "Question",
                "game_id": 1
            },
            {
                "level": "2",
                "content": "Never have I ever broken a bone.",
                "type": "Question",
                "game_id": 1
            },
            {
                "level": "3",
                "content": "Never have I ever sent a text to the wrong person.",
                "type": "Question",
                "game_id": 1
            },
            {
                "level": "2",
                "content": "Never have I ever dyed my hair a crazy color.",
                "type": "Question",
                "game_id": 1
            },
            {
                "level": "2",
                "content": "Never have I ever gone on a blind date.",
                "type": "Question",
                "game_id": 1
            },
            {
                "level": "3",
                "content": "Never have I ever been on a road trip.",
                "type": "Question",
                "game_id": 1
            },
            {
                "level": "2",
                "content": "Never have I ever stayed up all night binge-watching a series.",
                "type": "Question",
                "game_id": 1
            },
            {
                "level": "3",
                "content": "Never have I ever ghosted someone.",
                "type": "Question",
                "game_id": 1
            },
            {
                "level": "3",
                "content": "Never have I ever had a crush on a teacher.",
                "type": "Question",
                "game_id": 1
            },
            {
                "level": "2",
                "content": "Never have I ever eaten an entire pizza by myself.",
                "type": "Question",
                "game_id": 1
            },
            {
                "level": "1",
                "content": "Never have I ever laughed so hard I cried.",
                "type": "Question",
                "game_id": 1
            },
            {
                "level": "2",
                "content": "Never have I ever lied to get out of a social event.",
                "type": "Question",
                "game_id": 1
            },
            {
                "level": "3",
                "content": "Never have I ever snuck out of the house.",
                "type": "Question",
                "game_id": 1
            },
            {
                "level": "3",
                "content": "Never have I ever kissed someone of the same sex.",
                "type": "Question",
                "game_id": 1
            },
            {
                "level": "3",
                "content": "Never have I ever drunk dialed someone.",
                "type": "Question",
                "game_id": 1
            }]';

        $questions = json_decode($json, true);

        DB::table('questions')->insert($questions);

    }
}
