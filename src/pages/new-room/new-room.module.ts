import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewRoomPage } from './new-room';

@NgModule({
  declarations: [
    NewRoomPage,
  ],
  imports: [
    IonicPageModule.forChild(NewRoomPage),
  ],
})
export class NewRoomPageModule {}
