import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { CadastroPage } from '../cadastro/cadastro';

import { GamePage } from '../game/game';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  login:any = LoginPage;
  cadastro:any = CadastroPage;
  game:any = GamePage;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	
  }
}
