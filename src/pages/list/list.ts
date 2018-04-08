import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { CadastroPage } from '../cadastro/cadastro';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  login:any = LoginPage;
  cadastro:any = CadastroPage;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
