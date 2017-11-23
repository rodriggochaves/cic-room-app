import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserProvider {

  constructor(public http: Http) {}

  create( values ) {
    let headers = new Headers({
      "Content-Type": "application/json"
    });
    let body = JSON.stringify( values );
    return this.http.post("http://localhost:8080/api/users", body, { headers: headers })
    .map( res => res.json() );
  }

}
