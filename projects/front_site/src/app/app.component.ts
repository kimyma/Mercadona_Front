import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})



export class AppComponent {
  produit =[{nom: 'test'}]
  
  constructor(private api: ApiService) {
    this.getProduct();
   }
    getProduct = () => {
      this.api.getAllProduct().subscribe(
        data => {
          this.produit = data;
        },
        error => {
          console.log(error);
        }
      )
    }

  }

