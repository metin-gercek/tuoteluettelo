import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Phone } from '../interfaces';
import { Phones } from '../phone.datasource';


@Injectable({
  providedIn: 'root'
})
export class PhonesService {

  private apiPhonesUrl = 'api/phones';
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
