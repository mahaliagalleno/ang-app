import { Component, OnInit } from '@angular/core';
import { ProductServices } from '../shared/product.services';
import { IProduct } from '../shared/product.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
   pageTitle: string = 'Product List';
   products: IProduct[];
   filterBy: string = '';
   addActive: boolean = false;

  constructor(private prodServices: ProductServices, private activatedRoute: ActivatedRoute, private route: Router) {}
  ngOnInit() {
    this.products = this.activatedRoute.snapshot.data['products'];
  }

  cancelAddProduct() {
    this.addActive = !this.addActive;
  }

  submitAddProduct() {
    this.prodServices.getProducts().subscribe(response => {
      this.products = response;
    });

    this.addActive = !this.addActive;
  }

 }
