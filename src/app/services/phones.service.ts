import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Phone } from '../interfaces';
import { Phones } from '../phone.datasource';

import { throwError } from 'rxjs';



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

  getPhone(id: String): Observable<Phone | any>{
    return this.http.get<Phone>(this.apiPhonesUrl+'/'+id);
  }

}
