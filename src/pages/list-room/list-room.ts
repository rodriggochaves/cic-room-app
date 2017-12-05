import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

// other pages
import { WaitingRoomPage } from '../../pages/waiting-room/waiting-room';
import { NewRoomPage } from '../../pages/new-room/new-room';
import { RoomProvider } from '../../providers/room/room';

@IonicPage()
@Component({
  selector: 'page-list-room',
  templateUrl: 'list-room.html',
})

export class ListRoomPage {

  rooms: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              private roomProvider: RoomProvider,
              private storage: Storage) {}

  ionViewWillEnter() {
    this.roomProvider.all().subscribe( data => {
      data = JSON.parse(data.text())
      this.rooms = data.rooms;
    });
  }

  enterRoom( roomId: number ) {
    let alert = this.alertCtrl.create({
      title: 'Confirme sua entrada!',
      inputs: [ { name: 'name', placeholder: 'Nome' } ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Entrar!',
          handler: data => {
            // enviar requisicao para o server com a pessoa entrando na sala
            this.roomProvider.enter(roomId, data.name).subscribe( data => {
              alert.dismiss().then(() => {
                this.storeRoomId(data);
                this.navCtrl.setRoot(WaitingRoomPage, { relativeQueue: data.relativeQueue });
              });
            }, err => {
              console.log(err);
            });
            return false;
          }
        }
      ]
    });

    alert.present();
  }

  storeRoomId( queuePosition: any ) {
    this.storage.set("queuePosition", queuePosition);
  }
 
  newRoomPage() {
    this.navCtrl.push(NewRoomPage);
  }

}
