import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  base = 'https://api.bancoink.biz/qa/signup/'
  constructor(
    private http: HttpClient
  ) { }


   listTypeDocument() {
    return this.http.get<any>(`${this.base}documentTypes?apiKey=030106`)
  }
   listGenders() {
    return this.http.get<any>(`${this.base}genders?apiKey=030106`)
  }
}
