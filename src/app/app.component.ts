import { Component, OnInit } from '@angular/core';

import { Car } from './car';
import {CarService} from './app/car.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  cars: Car[];
  error = '';
  success = '';

  constructor(private carService: CarService) {

  }

  ngOnInit() {
    this.getCars();
  }
  getCars(): void {
    this.carService
  }


}
