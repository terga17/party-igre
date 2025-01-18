import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-neverhaveiever',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './neverhaveiever.component.html',
  styleUrl: './neverhaveiever.component.css',
})
export class NeverhaveieverComponent {
  lives: number = 10;
  showGameOverImage: boolean = false;
  currentQuestion: string = '';
  questions: string[] = [
    'Never have I ever lied to my parents.',
    'Never have I ever skipped a class.',
    'Never have I ever been on a plane.',
    'Never have I ever stayed up all night.',
    'Never have I ever eaten sushi.',
    "Never have I ever forgotten someone's birthday.",
    'Never have I ever gone bungee jumping.',
    'Never have I ever cheated on a test.',
    'Never have I ever been lost in a foreign country.',
    'Never have I ever sung karaoke in public.',
    'Never have I ever lied to my best friend.',
    'Never have I ever stayed awake for 24 hours straight.',
    'Never have I ever dyed my hair a crazy color.',
    'Never have I ever laughed so hard I cried.',
    'Never have I ever broken a bone.',
    'Never have I ever traveled alone.',
    'Never have I ever eaten something I regretted.',
    'Never have I ever accidentally sent a text to the wrong person.',
    'Never have I ever gone a week without showering.',
    'Never have I ever tried a weird food combination.',
    'Never have I ever fallen asleep during a movie at the cinema.',
    'Never have I ever snooped through someone’s phone.',
    'Never have I ever cried during a movie.',
    'Never have I ever gotten a speeding ticket.',
    'Never have I ever forgotten someone’s name immediately after meeting them.',
    'Never have I ever walked into the wrong bathroom.',
  ];

  constructor() {
    this.generateQuestion();
  }

  generateQuestion(): void {
    if (this.lives > 0) {
      const randomIndex = Math.floor(Math.random() * this.questions.length);
      this.currentQuestion = this.questions[randomIndex];
    } else {
      this.currentQuestion = 'Game Over! Click restart to play again.';
      this.showGameOverImage = true;
      setTimeout(() => {
        this.showGameOverImage = false;
      }, 2000);
    }
  }

  playerDidIt(): void {
    if (this.lives > 0) {
      this.lives -= 1;
    }
    this.generateQuestion();
  }

  playerDidNotDoIt(): void {
    if (this.lives > 0) {
      this.generateQuestion();
    }
  }

  restartGame(): void {
    this.lives = 10;
    this.generateQuestion();
  }

  goBack(): void {
    window.history.back();
  }
}
