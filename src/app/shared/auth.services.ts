import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

const apiUrl = "http://sims.137ms.com/api/";

@Injectable()

export class AuthServices {
    constructor(public http: Http){
        console.log('I got http.')
    }

    postData(credentials, type) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            this.http.post(apiUrl+type, JSON.stringify(credentials), {headers: headers}).subscribe(response => {
                resolve(response.json());
            }, (error) => {
                reject(error);
            });
        });
    }

}