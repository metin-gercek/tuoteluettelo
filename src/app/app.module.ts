import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    LeftMenuComponent,
    PhoneDetailsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
