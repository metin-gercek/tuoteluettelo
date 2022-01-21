import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Phone } from '../interfaces';
import { Phones } from '../phone.datasource';


@Injectable({
  providedIn: 'root'
})
export class PhonesService {

  constructor() { }

  getPhones():Observable<Phone[]> {
    return of(Phones);

  }

}
