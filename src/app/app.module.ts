import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';

// pages
import { HomePage } from '../pages/home/home';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { ListRoomPage } from '../pages/list-room/list-room';
import { WaitingRoomPage } from '../pages/waiting-room/waiting-room';
import { NewRoomPage } from '../pages/new-room/new-room';
import { RoomPage } from '../pages/room/room';

// providers
import { UserProvider } from '../providers/user/user';
import { RoomProvider } from '../providers/room/room';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignUpPage,
    ListRoomPage,
    WaitingRoomPage,
    NewRoomPage,
    RoomPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignUpPage,
    ListRoomPage,
    WaitingRoomPage,
    NewRoomPage,
    RoomPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    RoomProvider
  ]
})
export class AppModule {}
