import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { PhoneDetails } from '../details.interface';

import { Phone } from '../interfaces';
import { PhonesService } from '../services/phones.service';


@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css']
})
export class PhoneDetailsComponent implements OnInit {
  
  
  phoneDetails!: any;
  searchList! : String;
  phoneId: any;
  
  chosenPhone: any;
  allReady: boolean = false;
  faCheck = faCheck;
  faTimes = faTimes;
  newImageString: string = '"assets/" + image;';

  constructor(
    private phoneService: PhonesService,
    private route: ActivatedRoute,
    
  ) { }

  ngOnInit(): void {
    this.getPhone();
    
  }

  getPhone(): void {
    this.phoneId = this.route.snapshot.params['id'];
    this.route.params.subscribe((params) => {
      this.phoneId = params['id'];
     
    });
    
    this.phoneService.getProduct(this.phoneId).subscribe(((data: any) => {
      this.chosenPhone = data;
      this.allReady = true;
      
      }));

      




    // const id = this.route.snapshot.paramMap.get('id')!; 
    // this.phoneService.getProduct(id)
    //     .subscribe((details: any)=>{
    //       this.phoneDetails = details;
    //       this.allReady = true;
    //       console.log(details);
    //       console.log(this.phoneDetails.name);
    //       console.log(this.phoneDetails.battery.type);
    //     })
  
  
  }
  imgSrc: string = '"assets/" + image;' 
  changeImg(event: any) {
    this.newImageString = event.target.getAttribute('src');
    document.getElementById('view-img')?.setAttribute('src', this.newImageString);
  }


}


