import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ListRoomPage } from '../list-room/list-room';

@IonicPage()
@Component({
  selector: 'page-room',
  templateUrl: 'room.html',
})
export class RoomPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController) {}

  exit() {
    let alert = this.alertCtrl.create({
      title: 'Tem certeza?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Sim!',
          handler: () => {
            let navTransition = alert.dismiss().then(() => {
              this.navCtrl.setRoot(ListRoomPage);
            });
            return false;
          }
        }
      ],
    });

    alert.present();
  }



}
