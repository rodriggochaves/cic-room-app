import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { FormGroupName } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { RoomProvider } from '../../providers/room/room';
import { RoomPage } from '../room/room';
import { Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-new-room',
  templateUrl: 'new-room.html',
})
export class NewRoomPage {

  form : FormGroup = new FormGroup({
    room: new FormGroup({
      description: new FormControl(),
      openingTime: new FormControl(),
      finalTime: new FormControl(),
      password: new FormControl( '', Validators.required ),
    }),
  });

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public roomProvider: RoomProvider,
              public alertCtrl: AlertController) {}

  get password(): String { return this.form.get('room.password').value }

  submit() {
    if( this.password === "password" ) {
      this.roomProvider.create(console.log(this.form.value))
      .subscribe( response => {
        this.navCtrl.setRoot( RoomPage, { roomId: response.roomId } )
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
