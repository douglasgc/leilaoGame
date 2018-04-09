import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  form:FormGroup = new FormGroup({
    email : new FormControl('', Validators.required),
    senha : new FormControl('', Validators.required)
  });

  constructor(public navCtrl: NavController, public ls:LoginService, public alertCtrl: AlertController) { }

  login() {
    if ( this.form.valid ) {
      this.ls.login(this.form.value)
      .subscribe( ( data:any ) => {
        if ( data.status ) {
          localStorage.setItem('authResponse', null);
          localStorage.setItem('userID', data.info.id);
          localStorage.setItem('nome', data.info.nome);
          localStorage.setItem('email', data.info.email);
          localStorage.setItem('saldo', data.info.saldo);
        }else{
          this.showAlert('Ops!', 'E-mail ou Senha inválidos!');
        }
      });
    }
  }

  showAlert(title:string, text:string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

}
