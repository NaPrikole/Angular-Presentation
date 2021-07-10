import { Component, OnInit } from '@angular/core';
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
    new LanguagesModel('JavaScript', 'Language for web development',
    'http://truelogic.org/wordpress/wp-content/uploads/2015/10/javascript.jpg'),
    new LanguagesModel('JavaScript', 'Language for web development',
    'http://truelogic.org/wordpress/wp-content/uploads/2015/10/javascript.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
