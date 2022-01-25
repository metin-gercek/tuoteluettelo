import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Phone } from '../interfaces';
import { Phones } from '../phone.datasource';
import * as phoneData from '../../assets/phones/phones.json';
import { throwError } from 'rxjs';

console.log(phoneData);

@Injectable({
  providedIn: 'root'
})
export class PhonesService {

  apiPhonesUrl = "assets/phones/phones.json";
  // private apiPhonesUrl = 'api/phones';
  constructor(
    private http: HttpClient
  ) { }

  getPhones():Observable<Phone[]> {
    
    
    return this.http.get<Phone[]>(this.apiPhonesUrl);

  }

  getPhone(age: Number): Observable<Phone | any>{
    return this.http.get<Phone>(this.apiPhonesUrl+'/'+age);
  }

}
