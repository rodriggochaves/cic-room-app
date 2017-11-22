import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// other pages
import { WaitingRoomPage } from '../../pages/waiting-room/waiting-room';
import { NewRoomPage } from '../../pages/new-room/new-room';

@IonicPage()
@Component({
  selector: 'page-list-room',
  templateUrl: 'list-room.html',
})

export class ListRoomPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {}

  enterRoom() {
    this.navCtrl.push(WaitingRoomPage);
  }

  newRoomPage() {
    this.navCtrl.push(NewRoomPage);
  }

}
