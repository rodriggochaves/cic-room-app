import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
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

}
