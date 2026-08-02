import { Component, inject, computed, signal, HostListener, OnInit } from '@angular/core';
import { WordleService } from '../../services/wordle.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-wordle',
  imports: [FormsModule],
  templateUrl: './wordle.html',
  styleUrl: './wordle.scss',
})
export class Wordle implements OnInit {
  private readonly wordleService = inject(WordleService);
  
  protected readonly answer = signal<string>('Loading...');
  protected guess = signal<string>('');
  protected guesses = signal<string[]>([]);
  protected guessResults = signal<string[]>([]);
  protected gameOver = computed(() => this.attemptsLeft() <= 0 || this.gameWon());
  protected gameWon = computed(() => this.guess().toLowerCase() === this.answer().toLowerCase());
  protected attemptsLeft = computed(() => 6 - this.guesses().length);

  constructor() {
    this.wordleService.getWordle().subscribe((response: any) => {
      this.answer.set(response.answer.toLowerCase());
    });
  }

  ngOnInit() {
  }

  checkGuess() {
    this.guess.update((current) => current.toLowerCase());
    this.wordleService.isValidWord(this.guess()).subscribe({
      next: () => {
        this.guesses.update((current) => [...current,  this.guess()]);
        const result = [`For ${this.guess()}: `, this.highlightLetters(this.guess())].join(' ');
        this.guessResults.update((current) => [...current, result, "Next Guess: "]);
        this.guess.set('');
      },
      error: () => {
        this.guessResults.update((current) => [...current, `${this.guess()} is not a valid word. Next Guess: `]);
        this.guess.set('');
      }
    });
  }

  highlightLetters(guess: string) {
    const answer = this.answer();
    if (!answer) return 'none';
    return guess.split('').map((letter, index) => {
      if (letter === answer[index]) {
        return `${letter}`;
      } else if (answer.includes(letter)) {
        return `?`;
      } else {
        return `#`;
      }
    }).join(' '); 
  }
}
