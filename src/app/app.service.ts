import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  public nameSubject = new Subject<any>();

  constructor() { }

  public setNameSubject(value) {
      this.nameSubject.next(value);
  }
}
