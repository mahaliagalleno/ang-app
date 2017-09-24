import { Component, Input, OnChanges } from '@angular/core';
import { IProduct } from '../shared/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnChanges{
 
  @Input() products: IProduct[]; 
  @Input() filterBy: string;
  product: IProduct[] = [];
  
  visibleProducts: IProduct[];

  ngOnChanges() {
    if(this.filterBy == ''){
      if(this.products){
        this.visibleProducts = this.products.slice(0);        
      }
    }else{
      this.filterProducts(this.filterBy);
    }

  }

  filterProducts(filter){
    this.visibleProducts = this.products.filter(prod => { return prod.p_name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) });
  }

  editProductForm(product: IProduct[]){
    console.log(product);
  }

}
