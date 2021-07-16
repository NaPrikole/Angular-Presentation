import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { LanguagesModel } from '../../languages.model';

@Component({
  selector: 'app-language-item',
  templateUrl: './language-item.component.html',
  styleUrls: ['./language-item.component.scss']
})
export class LanguageItemComponent implements OnInit {
  @Output() selectedItemData = new EventEmitter<LanguagesModel>()
  @Input() langItem: LanguagesModel;

  constructor() {}

  ngOnInit(): void {}

  onItemSelect() {
    this.selectedItemData.emit(this.langItem);
  }

}
