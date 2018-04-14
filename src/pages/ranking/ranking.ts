import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: 'page-ranking',
	templateUrl: 'ranking.html'
})
export class RankingPage {
	clicks:number;
	constructor(public navParams: NavParams) {
		this.clicks = this.navParams.get('clicks');
	}
}
