import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LanguagesModel } from '../languages.model';

@Component({
  selector: 'app-languages-list',
  templateUrl: './languages-list.component.html',
  styleUrls: ['./languages-list.component.scss']
})
export class LanguagesListComponent implements OnInit {
  programmingLanguages: LanguagesModel[] = [
    new LanguagesModel('JavaScript', 'Language for web development',
    'http://truelogic.org/wordpress/wp-content/uploads/2015/10/javascript.jpg'),
    new LanguagesModel('NodeJS', 'Language for web development',
    'http://truelogic.org/wordpress/wp-content/uploads/2015/10/javascript.jpg'),
    new LanguagesModel('HTML', 'Language for web development',
    'http://truelogic.org/wordpress/wp-content/uploads/2015/10/javascript.jpg')
  ];

  @Output() itemDataToProgLangs = new EventEmitter<LanguagesModel>()

  constructor() {}

  ngOnInit(): void {
  }

  selectedItemData(itemData: any) {
    this.itemDataToProgLangs.emit(itemData);
  }

}
