import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { ProductServices } from '../shared/product.services';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  @Output() cancelAddProduct = new EventEmitter();
  @Output() submitAddProduct = new EventEmitter();

  productForm: FormGroup;

  constructor(private prod: ProductServices, private router: Router) { }

  ngOnInit() {
    const p_name = new FormControl('', Validators.required);
    const p_desc = new FormControl('', Validators.required);
    const p_brand = new FormControl('', Validators.required);

    this.productForm = new FormGroup({
      p_name: p_name,
      p_desc: p_desc,
      p_brand: p_brand
    });
  }

  submitProductForm(formValues) {
    this.prod.addProductForm(formValues);
    this.submitAddProduct.emit();
  }

  cancelForm() {
    this.cancelAddProduct.emit();
  }

}
