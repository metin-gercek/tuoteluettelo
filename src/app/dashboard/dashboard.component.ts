import { Component, OnInit } from '@angular/core';
import { Phone } from '../interfaces';
import { PhonesService } from '../services/phones.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  phones: Phone[] = [];
  constructor(private phoneService: PhonesService) { }

  ngOnInit() {
    this.getPhones();
  }

  getPhones(): void {
    this.phoneService.getPhones()
          .subscribe((phones: Phone[]) => this.phones = phones)
  }

}
