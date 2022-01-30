import { Component, OnInit, ViewChild } from '@angular/core';
import { Phone } from '../interfaces';
import { PhoneListComponent } from '../phone-list/phone-list.component';
import { PhonesService } from '../services/phones.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  phones: Phone[] = [];
  searchList! : any;
  
  constructor(private phoneService: PhonesService) { }

  
 
  ngOnInit() {
    this.getPhones();
  }

  getPhones(): void {
    this.phoneService.getPhones()
          .subscribe((phones: Phone[]) => this.phones = phones)
        }
 
}
