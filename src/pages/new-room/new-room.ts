import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { FormGroupName } from '@angular/forms/src/directives/reactive_directives/form_group_name';
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
      openingTime: new FormControl(),
      finalTime: new FormControl()
    }),
  });

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public roomProvider: RoomProvider) {}

  submit() {
    this.roomProvider.create(console.log(this.form.value))
    .subscribe( response => {
      this.navCtrl.push(RoomPage, { roomId: response.roomId })
    });
  }

}
