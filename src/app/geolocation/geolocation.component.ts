import { response } from 'express';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { PostService } from '../services/post.service';
import { FormsModule } from '@angular/forms';
import { Comments, Rates } from '../classes/comment';
import {NgForm} from '@angular/forms';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css'],
})
export class GeolocationComponent implements OnInit {
  amount: number = 0;
  current: string = 'USD';
  convert: string = 'ZAR';
  rate: number = 0;

  constructor(private service: PostService) {}

  onChange(event: any) {
    this.convert = event.target.value;
    this.fetchRates();
  }

  ngOnInit(): void {
    this.fetchRates();
  }

  fetchRates(): void {
    this.service.getRates(this.current, this.convert).subscribe(
      (response) => {
        this.rate = response?.data?.mid || null;
      },
      (error) => {
        console.error('Error fetching rates:', error);
      }
    );
  }
}

