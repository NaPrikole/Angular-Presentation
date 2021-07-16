import { Component, Input, OnInit } from '@angular/core';
import { LanguagesModel } from '../languages.model';

@Component({
  selector: 'app-languages-details',
  templateUrl: './languages-details.component.html',
  styleUrls: ['./languages-details.component.scss']
})
export class LanguagesDetailsComponent implements OnInit {
  @Input() dataItem: LanguagesModel;

  constructor() { }

  ngOnInit(): void {
  }

}
