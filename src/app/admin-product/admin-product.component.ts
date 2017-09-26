import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {

  AddProductForm: FormGroup;

  constructor() { }

  ngOnInit() {
    const name = new FormControl('', Validators.required);
    const categoryId = new FormControl('', Validators.required);
    const price = new FormControl('', Validators.required);
    const stocks = new FormControl('', Validators.required);
    const imageUrl = new FormControl('', Validators.required);

    this.AddProductForm = new FormGroup({
      name: name,
      categoryId: categoryId,
      price: price,
      stocks: stocks,
      imageUrl: imageUrl
    });
  }

}
