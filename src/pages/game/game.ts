import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PagamentoPage } from '../pagamento/pagamento';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {

  pagamento:any = PagamentoPage;

  constructor(public navCtrl: NavController) {

  }

}
