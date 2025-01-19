import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pyramid',
  standalone: true,
  imports: [FontAwesomeModule, MatDialogModule, CommonModule],
  templateUrl: './pyramid.component.html',
  styleUrl: './pyramid.component.css',
})
export class PyramidComponent {
  private cardsList: string[] = [
    '2_of_clubs.svg',
    '2_of_diamonds.svg',
    '2_of_hearts.svg',
    '2_of_spades.svg',
    '3_of_clubs.svg',
    '3_of_diamonds.svg',
    '3_of_hearts.svg',
    '3_of_spades.svg',
    '4_of_clubs.svg',
    '4_of_diamonds.svg',
    '4_of_hearts.svg',
    '4_of_spades.svg',
    '5_of_clubs.svg',
    '5_of_diamonds.svg',
    '5_of_hearts.svg',
    '5_of_spades.svg',
    '6_of_clubs.svg',
    '6_of_diamonds.svg',
    '6_of_hearts.svg',
    '6_of_spades.svg',
    '7_of_clubs.svg',
    '7_of_diamonds.svg',
    '7_of_hearts.svg',
    '7_of_spades.svg',
    '8_of_clubs.svg',
    '8_of_diamonds.svg',
    '8_of_hearts.svg',
    '8_of_spades.svg',
    '9_of_clubs.svg',
    '9_of_diamonds.svg',
    '9_of_hearts.svg',
    '9_of_spades.svg',
    '10_of_clubs.svg',
    '10_of_diamonds.svg',
    '10_of_hearts.svg',
    '10_of_spades.svg',
    'ace_of_clubs.svg',
    'ace_of_diamonds.svg',
    'ace_of_hearts.svg',
    'ace_of_spades2.svg',
    'jack_of_clubs2.svg',
    'jack_of_diamonds2.svg',
    'jack_of_hearts2.svg',
    'jack_of_spades2.svg',
    'king_of_clubs2.svg',
    'king_of_diamonds2.svg',
    'king_of_hearts2.svg',
    'king_of_spades2.svg',
    'queen_of_clubs2.svg',
    'queen_of_diamonds2.svg',
    'queen_of_hearts2.svg',
    'queen_of_spades2.svg',
  ];

  cardBack: string = 'assets/Images/card-back-side.svg';
  flippedStates: boolean[] = [];
  cards: { path: string; value: string }[] = []; // Struktura kart z vrednostjo in potjo
  playerCards: { path: string; value: string }[][] = [];
  lastRevealedCard: string | null = null; // Beleži zadnjo obrnjeno karto na piramidi

  constructor(
    private router: Router,
    library: FaIconLibrary,
    private dialog: MatDialog
  ) {
    library.addIconPacks(fas);
    this.initializeFlippedStates();
    this.assignCardValues();
    this.assignPlayerCardValues();
  }

  initializeFlippedStates() {
    this.flippedStates = Array(15).fill(false);
  }

  assignCardValues() {
    this.cards = Array.from({ length: 15 }, () => {
      const randomIndex = Math.floor(Math.random() * this.cardsList.length);
      const cardPath = this.cardsList[randomIndex];
      const cardValue = cardPath.split('_')[0]; // Iz imena kart vzame vrednost pred "_"
      return {
        path: `assets/Images/playing-cards/${cardPath}`, // Pot do slike karte
        value: cardValue, // Vrednost karte (2, 3, ace, ...)
      };
    });

    console.log('Generirane karte:', this.cards);
  }

  assignPlayerCardValues() {
    this.playerCards = Array.from({ length: 4 }, () => {
      return Array.from({ length: 5 }, () => {
        const randomIndex = Math.floor(Math.random() * this.cardsList.length);
        const cardPath = this.cardsList[randomIndex];
        const cardValue = cardPath.split('_')[0]; // Iz imena kart vzame vrednost pred "_"
        return {
          path: `assets/Images/playing-cards/${cardPath}`, // Pot do slike karte
          value: cardValue, // Vrednost karte (2, 3, ace, ...)
        };
      });
    });

    console.log('Generirane igralčeve karte:', this.playerCards);
  }

  toggleCard(index: number) {
    if (!this.flippedStates[index]) {
      this.flippedStates[index] = true;
      this.lastRevealedCard = this.cards[index].value; // Nastavi zadnjo obrnjeno karto
      console.log(
        `Karta na indeksu ${index} ima vrednost: ${this.cards[index].value}`
      );
    }
  }

  checkPlayerCard(setIndex: number, cardIndex: number) {
    const selectedCard = this.playerCards[setIndex][cardIndex];
    if (this.lastRevealedCard && selectedCard.value === this.lastRevealedCard) {
      console.log(`Karta ustreza: ${selectedCard.value}`);
      this.playerCards[setIndex][cardIndex].path = this.cardBack;
    } else {
      console.log('Karta ne ustreza.');
    }
  }

  NavigateToBus() {
    this.router.navigate(['/bus']);
  }
}
