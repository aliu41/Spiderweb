import { Component, signal } from '@angular/core';
import { WordHeader } from './components/word-header/word-header';
import { WordContent } from './components/word-content/word-content';

@Component({
  selector: 'app-root',
  imports: [WordHeader, WordContent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ProductiveGames');
}
