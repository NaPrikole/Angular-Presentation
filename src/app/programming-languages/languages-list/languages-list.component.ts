import { Component, OnInit} from '@angular/core';
import { LanguagesModel } from '../languages.model';
import { LanguagesListService } from '../../services/languages-list.service';

@Component({
  selector: 'app-languages-list',
  templateUrl: './languages-list.component.html',
  styleUrls: ['./languages-list.component.scss']
})
export class LanguagesListComponent implements OnInit {
  programmingLanguages: LanguagesModel[];

  constructor(private langSrv: LanguagesListService) {}

  ngOnInit(): void {
    this.programmingLanguages = this.langSrv.getProgrammingLanguages();
  }

}
