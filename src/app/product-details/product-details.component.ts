import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductServices } from "../shared/product.services";
import { IProduct } from "../shared/product.model";
import { FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct[];
  EditProductForm: FormGroup;
  
  constructor(private productServices: ProductServices, private route: ActivatedRoute) { }

  ngOnInit() {
    this.productServices.getProduct(+this.route.snapshot.params['PID']).subscribe(response => {
      this.product = response;
    });
  
    let p_name = new FormControl(this.product['p_name'],Validators.required);
    let p_desc = new FormControl(this.product['p_desc'],Validators.required);
    let p_brand = new FormControl(this.product['p_brand'],Validators.required);

    this.EditProductForm = new FormGroup({
      p_name: p_name,
      p_desc: p_desc,
      p_brand: p_brand
    })
  }

  submitEditProductForm(formValues){
   console.log(formValues);
  }

}
