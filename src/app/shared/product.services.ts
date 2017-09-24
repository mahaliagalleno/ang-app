import { Injectable } from '@angular/core';
import { AuthServices } from './auth.services';
import { IProduct } from '../shared/product.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

const SECRET_TOKEN = "2a0400a50c04a5c64e7818f4920059acbedcc2a193e715b0f0310923405b36e8";

@Injectable()

export class ProductServices {
    credentials = {
        "secret_key": SECRET_TOKEN
    }
          
    constructor(private auth: AuthServices) {}

   
    getProducts():Observable<IProduct[]> {
        let subject = new Subject<IProduct[]>();

        this.auth.postData(this.credentials, 'products')
        .then( result => { 
            subject.next(result['products'].filter(p => p.p_name != "" ));
            subject.complete();          
        }, (error) => {
            console.log("connection fail.");
        });

        return subject;
        
    }
  
    getProduct(PID: number):any{
        let subject = new Subject<IProduct[]>();
        this.credentials['PID'] = PID;

        this.auth.postData(this.credentials, 'product')
            .then( result => { 
                if(result && result['product'].length == 1){
                    subject.next(result['product'][0]);
                    subject.complete();                
                }
            }, (error) => {
                console.log("connection fail.");
            });

        return subject;
    }

    addProductForm(product: any){
        product["secret_key"] = SECRET_TOKEN;
        this.auth.postData(product, 'addProduct')
        .then( result => { 
            //result['product'].length;      
        }, (error) => {
            console.log("connection fail.");
        });
    }

}
