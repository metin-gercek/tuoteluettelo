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
import { HttpClientModule } from '@angular/common/http';
import { PhoneFilterPipe } from './phone-list/phone-filter.pipe';
import { OrderModule } from 'ngx-order-pipe';

// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './services/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    LeftMenuComponent,
    PhoneDetailsComponent,
    NavbarComponent,
    DashboardComponent,
    PhoneFilterPipe
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    OrderModule
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, {dataEncapsulation: false}
    // )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
