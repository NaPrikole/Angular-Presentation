import { Component, OnInit } from '@angular/core';
import { Languages } from '../shared/features.model';
import { WishesListService } from '../services/wishes-list.service';

@Component({
  selector: 'app-wishes-list',
  templateUrl: './wishes-list.component.html',
  styleUrls: ['./wishes-list.component.scss']
})
export class WishesListComponent implements OnInit {
  languages: Languages[];

  constructor(private wishesSrv: WishesListService) {}

  ngOnInit(): void {
    this.languages = this.wishesSrv.getLanguages();
  }

}
