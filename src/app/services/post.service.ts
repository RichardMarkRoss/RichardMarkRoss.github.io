import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comments, Rates } from '../classes/comment';
import { CommonModule } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class PostService{

  private url = 'https://api.exchangerate.host/latest?base=ZAR';
  private setUrl = 'https://api.exchangerate.host/';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Comments[]>{
    return this.http.get<Comments[]>(this.url);
  }
  getRates(): Observable<Rates[]>{
    return this.http.get<Rates[]>(this.url);
  }

  setRates(value: string): Observable<Rates[]>{
    return this.http.get<Rates[]>(this.setUrl+'latest?base='+value);
  }

}
