import { Component, OnInit } from '@angular/core';
import { LanguagesModel } from './languages.model';

@Component({
  selector: 'app-programming-languages',
  templateUrl: './programming-languages.component.html',
  styleUrls: ['./programming-languages.component.scss']
})
export class ProgrammingLanguagesComponent implements OnInit {
  dataItem: LanguagesModel;

  constructor() {}

  ngOnInit(): void {
  }

  selectedItemData(dataItem: LanguagesModel) {
    this.dataItem = dataItem;
  }

}
