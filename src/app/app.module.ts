import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ProgrammingLanguagesComponent } from './programming-languages/programming-languages.component';
import { LanguagesDetailsComponent } from './programming-languages/languages-details/languages-details.component';
import { LanguagesListComponent } from './programming-languages/languages-list/languages-list.component';
import { LanguageItemComponent } from './programming-languages/languages-list/language-item/language-item.component';
import { WishesListComponent } from './wishes-list/wishes-list.component';
import { ListEditComponent } from './wishes-list/list-edit/list-edit.component';
import { DropdownDirective } from './directives/dropdown.derictive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProgrammingLanguagesComponent,
    LanguagesDetailsComponent,
    LanguagesListComponent,
    LanguageItemComponent,
    WishesListComponent,
    ListEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
