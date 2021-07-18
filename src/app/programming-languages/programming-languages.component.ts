import { Component, OnInit } from '@angular/core';
import { LanguagesListService } from '../services/languages-list.service';
import { LanguagesModel } from './languages.model';

@Component({
  selector: 'app-programming-languages',
  templateUrl: './programming-languages.component.html',
  styleUrls: ['./programming-languages.component.scss']
})
export class ProgrammingLanguagesComponent implements OnInit {
  dataItem: LanguagesModel;

  constructor(private langSrv: LanguagesListService) {}

  ngOnInit(): void {
    this.langSrv.selectedLang.subscribe((langItem: LanguagesModel) => {
      this.dataItem = langItem;
    });
  }

}
