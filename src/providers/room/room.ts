import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RoomProvider {

  domain: string = "http://c0e64365.ngrok.io";
  roomUrl: string = `${this.domain}/api/rooms`;
  queueUrl: string = `${this.domain}/api/queues`;

  constructor(public http: Http) {}

  refreshRoom( roomId: number, queueId: number ) : Observable<any> {
    let headers = new Headers({
      "Content-Type": "application/json",
    });
    return this.http.get(`${this.roomUrl}/${roomId}/queues/${queueId}`, { headers })
    .map( x => x.json() );
  }

  create( values: any ): Observable<any> {
    let headers = new Headers({
      "Content-Type": "application/json",
    });
    let body = JSON.stringify( values );
    return this.http.post(this.roomUrl, body, { headers })
    .map(x => x.json())
  }

  enter( roomId: number, username: string ): Observable<any> {
    let headers = new Headers({ 
      "Content-Type": "application/json",
    });
    let body = JSON.stringify({ queue: { roomId: roomId, username: username } });
    return this.http.post(`${this.queueUrl}/`, body, { headers })
    .map(x => x.json());
  }

  listUsers( roomId: number ): Observable<any> {
    return this.http.get(`${this.roomUrl}/${roomId}/users`)
    .map( x => x.json() );
  }

  exit( queueId: number ): Observable<any> {
    let headers = new Headers({
      "Content-Type": "application/json",
    });
    return this.http.delete(`${this.queueUrl}/${queueId}`, { headers })
    .map(x => x.json());
  } 

  all(): Observable<any> {
    return this.http.get(`${this.roomUrl}`)
    .map( x => x.json());
  }

  close( id: number ): Observable<any> {
    let headers = new Headers({
      "Content-Type": "application/json",
    });
    return this.http.delete(`${this.roomUrl}/${id}`, { headers })
    .map(x => x.json());
  }

}
