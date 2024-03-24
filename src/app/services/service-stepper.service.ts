import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceStepperService {
  private form = new BehaviorSubject<any>({});

  constructor() { }

  setdata(form: any) {
    // console.log('data',form)
    this.form.next(form);
  }
 
  getForm(): Observable<any> {
    return this.form.asObservable();
    // return this.form.asObservable().pipe(
    //   filter(value => value !== '')
    // );
  }
}
