import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ListRoomPage } from '../list-room/list-room';
import { RoomProvider } from '../../providers/room/room';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-room',
  templateUrl: 'room.html',
})
export class RoomPage {

  room: any;
  students: Array<any>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              private roomProvider: RoomProvider,
              private storage: Storage) {}

  ionViewWillEnter() {
    this.storage.get('roomInfo').then( data => {
      return this.room = data.room;
    }).then( _ => {
      this.update();
    });
  }

  update() {
    this.roomProvider.listUsers( this.room.id ).subscribe(data => {
      this.students = data.users;
    });
  }

  attend( studentId: number ) {
    this.roomProvider.exit( studentId ).subscribe( data => {
      let alert = this.alertCtrl.create({
        title: 'Aluno atendido com sucesso!',
        buttons: ['ok']
      });

      alert.present();
      this.students = this.students.filter( s => { return s.id != studentId } );
    }, _ => {
      let alert = this.alertCtrl.create({
        title: 'Aluno já saiu da sala!',
        buttons: ['ok']
      });

      alert.present();
      this.students = this.students.filter(s => { return s.id != studentId });
    });
  }

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
            this.roomProvider.close( this.room.id ).subscribe( data => {
              this.redirectToHome( alert );
            }, _ => {
              this.redirectToHome( alert );
            });
            return false;
          }
        }
      ],
    });

    alert.present();
  }

  private redirectToHome( alert ): void {
    alert.dismiss().then( _ => {
      return this.storage.remove('roomInfo')
    }).then( _ => {
      this.navCtrl.setRoot(ListRoomPage);
    });
  }

}
