import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
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

  enter( roomId: number, username: string ): Observable<any> {
    let headers = new Headers({ 
      "Content-Type": "application/json",
    });
    let body = JSON.stringify({ user: { roomId: roomId, username: username } });
    return this.http.post("http://localhost:8080/api/rooms/enter", body, { headers })
    .map(x => x.json());
  }

  all(): Observable<any> {
    return this.http.get("http://localhost:8080/api/rooms");
  }

}
