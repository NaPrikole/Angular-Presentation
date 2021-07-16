import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Languages } from 'src/app/shared/features.model';

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.scss']
})
export class ListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amoutInput') amoutInput: ElementRef;
  @Output() languageStrucrure = new EventEmitter<Languages>();

  constructor() { }

  ngOnInit(): void {}

  onAddNewLang() {
    this.languageStrucrure.emit({
      name: this.nameInput.nativeElement.value,
      countOfFeatures: this.amoutInput.nativeElement.value
    });
  }

}
