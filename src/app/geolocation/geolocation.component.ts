import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css'],
})
export class GeolocationComponent implements OnInit {
  amount: number = 1;
  baseCurrency: string = 'USD';
  targetCurrency: string = 'ZAR';
  rate: number = 0;
  result: number | null = null;

  // Predefined currency options
  currencies = ['USD', 'ZAR', 'EUR', 'GBP', 'HKD', 'KES'];

  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.fetchRate();
  }

  fetchRate(): void {
    if (this.baseCurrency && this.targetCurrency) {
      this.service.getRates(this.baseCurrency, this.targetCurrency).subscribe(
        (response) => {
          this.rate = response?.data?.mid ?? 0;
          this.calculate();
        },
        (error) => {
          console.error('Error fetching rates:', error);
          this.rate = 0;
        }
      );
    }
  }

  calculate(): void {
    this.result = this.rate * this.amount;
  }

  onSubmit(): void {
    this.fetchRate();
  }
}
