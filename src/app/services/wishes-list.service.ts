import { Injectable } from '@angular/core';
import { Languages } from '../shared/features.model';

@Injectable({
  providedIn: 'root'
})
export class WishesListService {
  private languages: Languages[] = [
    new Languages('Very cool lang', 100),
    new Languages('Super cool lang', 200)
  ];

  constructor() { }

  getLanguages() {
    return this.languages;
  }

  addNewLanguage(item: Languages) {
    this.languages.push(item);
  }

}
