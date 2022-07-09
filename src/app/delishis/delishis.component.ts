import { Component, OnInit } from '@angular/core';
import { Dishes } from '../dishes';
import {Meals} from '../meal';
@Component({
  selector: 'app-delishis',
  templateUrl: './delishis.component.html',
  styleUrls: ['./delishis.component.css']
})
export class DelishisComponent implements OnInit {
images:string='../../assets/dish/download (1).jpg';
name:string="salad";
price:number= 10;
meal = Meals;

Selected(x:any){
  console.log(x.target)
  this.images=x.image;
  this.name=x.title;
  this.price = x.price;
    }
  constructor() { }

  ngOnInit(): void {
  }

}
