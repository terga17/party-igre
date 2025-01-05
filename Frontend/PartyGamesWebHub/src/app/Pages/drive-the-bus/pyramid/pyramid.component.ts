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
  styleUrl: './pyramid.component.css'
})

export class PyramidComponent {
  private cards: readonly string[] = [
    '2_of_clubs.svg', '2_of_diamonds.svg', '2_of_hearts.svg', '2_of_spades.svg',
    '3_of_clubs.svg', '3_of_diamonds.svg', '3_of_hearts.svg', '3_of_spades.svg',
    '4_of_clubs.svg', '4_of_diamonds.svg', '4_of_hearts.svg', '4_of_spades.svg',
    '5_of_clubs.svg', '5_of_diamonds.svg', '5_of_hearts.svg', '5_of_spades.svg',
    '6_of_clubs.svg', '6_of_diamonds.svg', '6_of_hearts.svg', '6_of_spades.svg',
    '7_of_clubs.svg', '7_of_diamonds.svg', '7_of_hearts.svg', '7_of_spades.svg',
    '8_of_clubs.svg', '8_of_diamonds.svg', '8_of_hearts.svg', '8_of_spades.svg',
    '9_of_clubs.svg', '9_of_diamonds.svg', '9_of_hearts.svg', '9_of_spades.svg',
    '10_of_clubs.svg', '10_of_diamonds.svg', '10_of_hearts.svg', '10_of_spades.svg',
    'ace_of_clubs.svg', 'ace_of_diamonds.svg', 'ace_of_hearts.svg', 'ace_of_spades2.svg',
    'jack_of_clubs2.svg', 'jack_of_diamonds2.svg', 'jack_of_hearts2.svg', 'jack_of_spades2.svg',
    'king_of_clubs2.svg', 'king_of_diamonds2.svg', 'king_of_hearts2.svg', 'king_of_spades2.svg',
    'queen_of_clubs2.svg', 'queen_of_diamonds2.svg', 'queen_of_hearts2.svg', 'queen_of_spades2.svg',
  ];
  cardBack: string = 'assets/Images/card-back-side.svg';
  pyramid: string[][] = [];
  revealedCards: boolean[][] = [];
  currentCardIndex: number = 0;
  flippedStates: boolean[] = []; // Privzeto stanje (karta je zaprta)

  constructor(private router: Router, library: FaIconLibrary, private dialog: MatDialog) {
    library.addIconPacks(fas);
    this.initializeFlippedStates();
  }
  
  initializeFlippedStates() {
    // Inicializiraj stanja vseh kart na "neobrnjeno" (false)
    this.flippedStates = this.cards.map(() => false);
  }

  toggleCard(index: number) {
    // Obrni stanje samo za določeno karto
    this.flippedStates[index] = !this.flippedStates[index];
  }

  getRandomCard(): string {
    const randomIndex = Math.floor(Math.random() * this.cards.length);
    return `assets/Images/playing-cards/${this.cards[randomIndex]}`;
  }
}
