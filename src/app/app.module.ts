import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    LeftMenuComponent,
    PhoneDetailsComponent,
    NavbarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
