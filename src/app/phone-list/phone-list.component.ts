import { Component, OnInit, Output } from '@angular/core';
import { Phone } from '../interfaces';
import * as phoneData from '../../assets/phones/phones.json';
import { PhonesService } from '../services/phones.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css'],
})
export class PhoneListComponent {
  
  @Output()
  phones!: Phone[];
  searchList! : String;

  constructor(private phoneService: PhonesService) {}

  ngOnInit(): void {
    this.getPhones();
  }

  getPhones(): void {
    this.phoneService.getPhones()
      .subscribe(phones => {
      this.phones = phones;
    });
  }

  
}
