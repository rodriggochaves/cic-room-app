import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

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
              public navParams: NavParams,
              public alertCtrl: AlertController) {}

  enterRoom() {
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
            let navTransition = alert.dismiss().then(() => {
              this.navCtrl.setRoot(WaitingRoomPage);
            });
            return false;
          }
        }
      ]
    });

    alert.present();
  }

  newRoomPage() {
    this.navCtrl.push(NewRoomPage);
  }

}
