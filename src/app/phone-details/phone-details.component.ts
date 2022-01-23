import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhonesService } from '../services/phones.service';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css']
})
export class PhoneDetailsComponent implements OnInit {
  phone: any;

  constructor(
    private phoneService: PhonesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getPhone();
  }

  getPhone(): void {
    const age = +this.route.snapshot.paramMap.get('age')!; 
    this.phoneService.getPhone(age)
        .subscribe(phone=>this.phone = phone);
    
  }

}
