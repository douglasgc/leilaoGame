import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  form:FormGroup = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    senha : new FormControl('', Validators.required)
  });

  constructor(public navCtrl: NavController, public ls:LoginService) { }

  login() {
    if ( this.form.valid ) {
      this.ls.login(this.form.value)
      .subscribe( ( data:any ) => {
        console.log(data);
      });
    }
  }

}
