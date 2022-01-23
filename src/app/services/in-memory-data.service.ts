import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const phones = [
    
      {
          age: 0, 
          id: "motorola-xoom-with-wi-fi", 
          imageUrl: "img/phones/motorola-xoom-with-wi-fi.0.jpg", 
          name: "Motorola XOOM\u2122 with Wi-Fi", 
          snippet: "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
      }, 
      {
          age: 1, 
          id: "motorola-xoom-with-wi-fi", 
          imageUrl: "img/phones/motorola-xoom-with-wi-fi.0.jpg", 
          name: "Motorola XOOM\u2122 with Wi-Fi", 
          snippet: "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
      }
  
     
    ];
    return {phones};
  } 
  constructor() { }
}
