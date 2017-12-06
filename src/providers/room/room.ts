import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RoomProvider {

  url: string = "http://localhost:8080/api/rooms";

  constructor(public http: Http) {}

  refreshRoom( roomId: number ) {
    return Observable.create( observer => {
      observer.next(9);
      observer.complete();
    });
  }

  create( values: any ): Observable<any> {
    let headers = new Headers({
      "Content-Type": "application/json",
    });
    let body = JSON.stringify( values );
    return this.http.post(this.url, body, { headers })
    .map(x => x.json())
  }

  enter( roomId: number, username: string ): Observable<any> {
    let headers = new Headers({ 
      "Content-Type": "application/json",
    });
    let body = JSON.stringify({ user: { roomId: roomId, username: username } });
    return this.http.post("http://localhost:8080/api/rooms/enter", body, { headers })
    .map(x => x.json());
  }

  exit( queueId: number ): Observable<any> {
    let headers = new Headers({
      "Content-Type": "application/json",
    });
    return this.http.delete(`http://localhost:8080/api/rooms/exit/${queueId}`, { headers })
    .map(x => x.json());
  } 

  all(): Observable<any> {
    return this.http.get("http://localhost:8080/api/rooms");
  }

}
