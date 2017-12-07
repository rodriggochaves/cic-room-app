import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RoomProvider {

  domain: string = "http://c0e64365.ngrok.io";
  url: string = `${this.domain}/api/rooms`;

  constructor(public http: Http) {}

  refreshRoom( roomId: number, queueId: number ) : Observable<any> {
    let headers = new Headers({
      "Content-Type": "application/json",
    });
    return this.http.get(`${this.url}/${roomId}/queues/${queueId}`, { headers })
    .map( x => x.json() );
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
    return this.http.post(`${this.url}/enter`, body, { headers })
    .map(x => x.json());
  }

  listUsers( roomId: number ): Observable<any> {
    return this.http.get(`${this.url}/${roomId}/users`)
    .map( x => x.json() );
  }

  exit( queueId: number ): Observable<any> {
    let headers = new Headers({
      "Content-Type": "application/json",
    });
    return this.http.delete(`${this.url}/exit/${queueId}`, { headers })
    .map(x => x.json());
  } 

  all(): Observable<any> {
    return this.http.get(`${this.url}`);
  }

  close( id: number ): Observable<any> {
    let headers = new Headers({
      "Content-Type": "application/json",
    });
    return this.http.delete(`${this.url}/${id}`, { headers })
    .map(x => x.json());
  }

}
