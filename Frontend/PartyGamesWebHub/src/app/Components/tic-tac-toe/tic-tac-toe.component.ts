import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css'],
})
export class TicTacToeComponent implements OnInit {
  cells: string[] = Array(9).fill('');
  currentPlayer: string = 'X';
  gameActive: boolean = true;
  gameResult: string = '';
  remainingTime: number = 10;
  timerInterval: any;
  winningConditions: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  ngOnInit(): void {
    this.startTimer();
  }

  handleCellClick(cellIndex: number): void {
    if (this.cells[cellIndex] !== '' || !this.gameActive) {
      return;
    }

    this.cells[cellIndex] = this.currentPlayer;

    if (this.checkWin()) {
      this.gameActive = false;
      this.gameResult = `${this.currentPlayer} Wins!`;
      clearInterval(this.timerInterval);
      return;
    }

    if (this.cells.every((cell) => cell !== '')) {
      this.gameActive = false;
      this.gameResult = 'Draw!';
      clearInterval(this.timerInterval);
      return;
    }

    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    this.resetTimer();
  }

  checkWin(): boolean {
    return this.winningConditions.some((condition) => {
      return condition.every((index) => {
        return this.cells[index] === this.currentPlayer;
      });
    });
  }

  startTimer(): void {
    this.timerInterval = setInterval(() => {
      if (this.remainingTime > 0 && this.gameActive) {
        this.remainingTime--;
      } else if (this.remainingTime === 0) {
        clearInterval(this.timerInterval);
        this.gameActive = false;
        this.gameResult = `Time's up! ${
          this.currentPlayer === 'X' ? 'O' : 'X'
        } Wins! `;
      }
    }, 1000);
  }
  resetTimer(): void {
    clearInterval(this.timerInterval);
    this.remainingTime = 10;
    this.startTimer();
  }

  restartGame(): void {
    this.cells = Array(9).fill('');
    this.currentPlayer = 'X';
    this.gameActive = true;
    this.gameResult = '';
    this.remainingTime = 10;
    this.startTimer();
  }
}
