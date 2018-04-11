import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PlanosPage } from '../planos/planos';

import { InstitucionalPage } from '../institucional/institucional';


import { ListGamePage } from './list/list';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {


	listGame = ListGamePage;
	institucionalPage = InstitucionalPage;
  	planos:any = PlanosPage;
  
  constructor(public navCtrl: NavController) {

  }

}
