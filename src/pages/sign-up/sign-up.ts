import { Component } from '@angular/core';
import { FormGroupName, FormGroup, FormControl } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  public userForm = new FormGroup({
    user: new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      passwordConfirmation: new FormControl(),
    }),
  });

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private userProvider: UserProvider) {}

  onSubmit() {
    this.userProvider.create(this.userForm.value).subscribe( response => {
      console.log( response );
    })
  }
}
