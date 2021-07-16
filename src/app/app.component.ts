import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tabLink = 'langlist';

  navigationClicked(tabtype: string) {
    this.tabLink = tabtype;
  }
}
