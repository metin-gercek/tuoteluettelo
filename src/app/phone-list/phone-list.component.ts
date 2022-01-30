import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Phone } from '../interfaces';
import * as phoneData from '../../assets/phones/phones.json';
import { PhonesService } from '../services/phones.service';




@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css'],
})



export class PhoneListComponent {
  
  @Input() searchList! : string;
  @Output() searchEvent = new EventEmitter<string>();
  phones!: Phone[];
  

  constructor(private phoneService: PhonesService) {}

  sentEvent() {
    this.searchEvent.emit(this.searchList);
  }

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
