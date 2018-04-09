import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ListGamePage } from './list/list';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {

	listGame = ListGamePage;
  constructor(public navCtrl: NavController) {

  }

}
