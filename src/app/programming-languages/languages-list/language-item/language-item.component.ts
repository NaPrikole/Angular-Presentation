import { Component, Input, OnInit } from '@angular/core';
import { LanguagesListService } from 'src/app/services/languages-list.service';
import { LanguagesModel } from '../../languages.model';

@Component({
  selector: 'app-language-item',
  templateUrl: './language-item.component.html',
  styleUrls: ['./language-item.component.scss']
})
export class LanguageItemComponent implements OnInit {
  @Input() langItem: LanguagesModel;

  constructor(private langSrv: LanguagesListService) {}

  ngOnInit(): void {}

  onItemSelected() {
    this.langSrv.selectedLang.emit(this.langItem);
  }

}
