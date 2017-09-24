import { Injectable } from '@angular/core';
import { ProductServices } from "./product.services";
import { Resolve } from "@angular/router";

@Injectable()

export class ProductListResolver implements Resolve<any> {

    constructor(private product: ProductServices) {}

    resolve(){
        return this.product.getProducts().map(products=>products)
    }
}