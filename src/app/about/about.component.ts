import { Component, OnInit } from '@angular/core';
import { Dishes } from './../dishes';
import { Meals } from './../meal';
import * as $ from 'jquery';
import { bufferToggle } from 'rxjs';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  name:string="Mostafa";
  images:string='../../assets/icon/logo mostafa.ico';
  disc:string= "Default";
  constructor() { }
  meal = Meals;
  visible:boolean = true;
  ngOnInit(): void {
  }
  Selected(x:any){
    console.log("mostafa")
    this.name=x.title;
    this.images=x.image;
    this.disc=x.disc;
      }
  
}
