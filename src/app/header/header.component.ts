import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  tabtype: string = '';
  @Output() navigationFires = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void { }

  onLangListClick() {
    this.navigationFires.emit(this.tabtype = 'langlist');
  }

  onWishesListClick() {
    this.navigationFires.emit(this.tabtype = 'wisheslist');
  }

}
