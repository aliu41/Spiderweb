import { Component } from '@angular/core';
import { Wordle } from '../wordle/wordle';

@Component({
  selector: 'app-word-content',
  imports: [Wordle],
  templateUrl: './word-content.html',
  styleUrl: './word-content.scss',
})
export class WordContent {
}
