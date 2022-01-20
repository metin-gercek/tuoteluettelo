import { Component, OnInit } from '@angular/core';
import { Phone } from '../interfaces';
import {Phones} from '../phone.datasource';




@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent {
  
  phones = Phones;
 

  constructor() { }

  ngOnInit(): void {
  }
  
 
  
  
  
}
