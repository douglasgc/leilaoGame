import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PagamentoPage } from '../pagamento/pagamento';

import { ListGamePage } from './list/list';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {


	listGame = ListGamePage;
  	pagamento:any = PagamentoPage;
  
  constructor(public navCtrl: NavController) {

  }

}
