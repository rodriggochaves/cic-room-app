import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { ListRoomPage } from '../pages/list-room/list-room';
import { WaitingRoomPage } from '../pages/waiting-room/waiting-room';
import { RoomPage } from '../pages/room/room';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = ListRoomPage;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              private storage: Storage) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      return this.storage.get('queuePosition');
    }).then( data => {
      if ( data && data.roomId ) {
        this.rootPage = WaitingRoomPage;
      }
      return this.storage.get('roomInfo')
    }).then( data => {
      if ( data && data.room.id ) {
        this.rootPage = RoomPage;
      }
    });
  }
}

