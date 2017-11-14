import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignUpPage } from '../sign-up/sign-up';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, 
              private userProvider: UserProvider) {}

  loadSignUpPage() {
    this.navCtrl.push( SignUpPage );
  }

}
