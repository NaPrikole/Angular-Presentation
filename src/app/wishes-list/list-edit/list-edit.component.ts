import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WishesListService } from '../../services/wishes-list.service';

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.scss']
})
export class ListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amoutInput') amoutInput: ElementRef;

  constructor(private wishesSrv: WishesListService) { }

  ngOnInit(): void {}

  onAddNewLang() {
    this.wishesSrv.addNewLanguage({
      name: this.nameInput.nativeElement.value,
      countOfFeatures: this.amoutInput.nativeElement.value
    });
  }

}
