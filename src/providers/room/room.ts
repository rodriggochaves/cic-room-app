import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RoomProvider {

  constructor(public http: Http) {}

  refreshRoom( roomId: number ) {
    return Observable.create( observer => {
      observer.next(9);
      observer.complete();
    });
  }

  create( values: any ) {
    return Observable.create( observer => {
      observer.next({ status: 'ok', roomId: 82 })
      observer.complete();
    });
  }

}
