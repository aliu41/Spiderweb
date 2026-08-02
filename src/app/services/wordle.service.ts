import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WordleService {
  private readonly httpClient = inject(HttpClient);

  getWordle() {
    return this.httpClient.get('https://wordlehints.co.uk/wp-json/wordlehint/v1/answers/latest');
  }

  isValidWord(word: string) {
    return this.httpClient.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
  }
}
