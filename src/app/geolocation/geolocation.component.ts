import { response } from 'express';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { PostService } from '../services/post.service';
import { Comments, Rates } from '../classes/comment';
import {NgForm} from '@angular/forms';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css']
})
export class GeolocationComponent implements OnInit {
  amount: number;
  current:string;
  convert: String;
  rate: Rates[];
  rateValues =[];
  ratesArray: [];
  constructor(private service: PostService) {
    this.rate =[];
    this.rateValues =[];
    this.convert ='';
    this.current = '';
    this.amount = 0;
    this.ratesArray = [];
   }

   onChange(event: any){
    console.log(event.value);
    }

  ngOnInit(): void {
    this.service.getPosts().subscribe((response)=>{
      let rates = JSON.parse(JSON.stringify(response));
      this.ratesArray = rates.rates;
      })}
}
