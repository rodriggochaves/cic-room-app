import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { FormGroupName } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { RoomProvider } from '../../providers/room/room';
import { RoomPage } from '../room/room';

@IonicPage()
@Component({
  selector: 'page-new-room',
  templateUrl: 'new-room.html',
})
export class NewRoomPage {

  form : FormGroup = new FormGroup({
    room: new FormGroup({
      description: new FormControl(),
      openningTime: new FormControl(),
      finalTime: new FormControl(),
      password: new FormControl( '', Validators.required ),
    }),
  });

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public roomProvider: RoomProvider,
              public alertCtrl: AlertController,
              public storage: Storage) {}

  get password(): String { return this.form.get('room.password').value }

  submit() {
    if( this.password === "password" ) {
      this.roomProvider.create(this.form.value)
      .subscribe( data => {
        let room = data.room
        this.storage.set('roomInfo', { room: room });
        this.navCtrl.setRoot(RoomPage, { room: room });
      });
    } else {
      let alert = this.alertCtrl.create({
        title: 'Senha Incorreta!',
        buttons: ['Poxa...']
      });
      alert.present();
    }
    
  }

}
