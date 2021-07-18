import { EventEmitter, Injectable } from '@angular/core';
import { LanguagesModel } from '../programming-languages/languages.model';
import { Languages } from '../shared/features.model';

@Injectable({
  providedIn: 'root'
})
export class LanguagesListService {
  private   programmingLanguages: LanguagesModel[] = [
    new LanguagesModel(
      'JavaScript',
      'Language for web development',
      'http://truelogic.org/wordpress/wp-content/uploads/2015/10/javascript.jpg',
      [
        new Languages('Very cool lang', 100),
        new Languages('Super cool lang', 200)
      ]
      ),
    new LanguagesModel(
      'NodeJS',
      'Language for web development',
      'http://truelogic.org/wordpress/wp-content/uploads/2015/10/javascript.jpg',
      [
        new Languages('Very cool lang', 100),
        new Languages('Super cool lang', 200)
      ]),
  ];

  selectedLang = new EventEmitter<LanguagesModel>();

  constructor() { }

  getProgrammingLanguages() {
    return this.programmingLanguages.slice();
  }

}
