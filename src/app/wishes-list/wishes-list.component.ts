import { Component, OnInit } from '@angular/core';
import { Languages } from '../shared/features.model';

@Component({
  selector: 'app-wishes-list',
  templateUrl: './wishes-list.component.html',
  styleUrls: ['./wishes-list.component.scss']
})
export class WishesListComponent implements OnInit {
  languages: Languages[] = [
    new Languages('JavaScript', 10),
    new Languages('NodeJs', 20)
  ];

  constructor() {}

  ngOnInit(): void {}

  addNewLanguage(item: Languages) {
    this.languages.push(item);
  }

}
