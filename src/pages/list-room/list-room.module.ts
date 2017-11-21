import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListRoomPage } from './list-room';

@NgModule({
  declarations: [
    ListRoomPage,
  ],
  imports: [
    IonicPageModule.forChild(ListRoomPage),
  ],
})
export class ListRoomPageModule {}
