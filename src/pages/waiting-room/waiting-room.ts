import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoomProvider } from '../../providers/room/room';

@IonicPage()
@Component({
  selector: 'page-waiting-room',
  templateUrl: 'waiting-room.html',
})
export class WaitingRoomPage {

  timeColor: String;
  queueSize: number;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public roomProvider: RoomProvider) {
    this.queueSize = 10;
  }

  refresh() {
    this.roomProvider.refreshRoom(2).subscribe( remaning => {
      this.queueSize = remaning;
    });
  }

  decideTimeColor() {
    if( this.queueSize == 0 ) {
      this.timeColor = "next-to-attend";
    } else if( this.queueSize > 0 && this.queueSize <= 3 ) {
      this.timeColor = "wait";
    } else {
      this.timeColor = "long-wait";
    }
  }

  ionViewDidLoad() {
    this.decideTimeColor();
  }

}
