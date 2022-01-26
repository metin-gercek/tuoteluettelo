import { Component, OnInit } from '@angular/core';
import { Phone } from '../interfaces';
import { PhoneFilterPipe } from '../phone-list/phone-filter.pipe';
import  { PhoneListComponent } from '../phone-list/phone-list.component';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  
  searchList!: PhoneListComponent | any;
  phone!: Phone[] | undefined;

 

  constructor() { }

  ngOnInit(): void {
  }

}
