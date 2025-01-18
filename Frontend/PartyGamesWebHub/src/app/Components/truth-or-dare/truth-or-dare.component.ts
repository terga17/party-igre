import { Component } from '@angular/core';

@Component({
  selector: 'app-truth-or-dare',
  templateUrl: './truth-or-dare.component.html',
  styleUrls: ['./truth-or-dare.component.css'],
})
export class TruthOrDareComponent {
  showChooseField = true;
  showTruthOrDareSelection = false;
  showQuestionDisplay = false;
  currentQuestion = '';
  selectedGameType = '';

  questions = {
    normal: {
      truth: [
        'What is your biggest fear?',
        'Have you ever lied to your best friendddddddddddd?',
      ],
      dare: ['Do 10 push-ups.', 'Sing a song out loud.'],
    },
    couples: {
      truth: [
        'What is your favorite memory with your partner?',
        'Have you ever been jealous in your relationship?',
      ],
      dare: ['Give your partner a kiss.', 'Write a love note to your partner.'],
    },
    party: {
      truth: [
        'Who is the person you have a crush on?',
        'What is the most embarrassing thing you have done?',
      ],
      dare: ['Dance for 1 minute without music.', 'Eat a spoonful of mustard.'],
    },
    extreme: {
      truth: [
        'What is the biggest lie you have ever told?',
        'Have you ever cheated on someone?',
      ],
      dare: ['Drink a mystery concoction.', 'Shave off an eyebrow.'],
    },
  };

  chooseGameType(gameType: string): void {
    this.selectedGameType = gameType;
    this.showTruthOrDareSelection = true;
    this.showChooseField = false;
    this.showQuestionDisplay = false;
  }

  startGame(choice: 'truth' | 'dare'): void {
    const questionsArray =
      this.questions[this.selectedGameType as keyof typeof this.questions][
        choice
      ];
    this.currentQuestion =
      questionsArray[Math.floor(Math.random() * questionsArray.length)];
    this.showQuestionDisplay = true;
    this.showTruthOrDareSelection = false;
    this.showChooseField = false;
  }

  resetGame(): void {
    this.showTruthOrDareSelection = false;
    this.showQuestionDisplay = false;
    this.showChooseField = true;
    this.currentQuestion = '';
    this.selectedGameType = '';
  }
}
