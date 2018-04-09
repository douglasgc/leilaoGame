import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { timer } from 'rxjs/observable/timer';
import { interval } from 'rxjs/observable/interval';
import { PlayerService } from './player.service';
import { AlertController } from 'ionic-angular';
import moment from 'moment';

@Component({
	selector: 'page-player',
	templateUrl: './player.html'
})
export class PlayerPage {

	game:any;
	resultGame:any;
	time_start:number;
	clicks:number=0;
	timer:any;
	time_percent:number = 0;
	time_game:number = 0;
	loader:any;
	int:any;
	intS:any;
	timer$:any;

	constructor(public navParams: NavParams, public alertCtrl:AlertController,  public loadingCtrl:LoadingController, public ps:PlayerService) {
		
		this.start();
	}
	start () {
		this.createLoading();
		
		this.ps
		.getGame(this.navParams.get('id'))
		.subscribe((game:any) => {

			this.loader.dismissAll();
			this.game =game.Game;

			console.log(moment().diff(moment("2018-04-24 14:30:00")));

			let time_start = 14000; 
			this.time_start=(time_start-(-1*1000))/1000;
			this.int = interval(1000)
			.subscribe((i) => {
				

				if(i==time_start/1000) {this.int.unsubscribe();return;}
				this.time_start=(time_start-(i*1000))/1000;
			});

			this.timer$ = timer(time_start)
			.subscribe(() => this.startGame())
		})
	}
	ngOnDestroy() {
		if(this.int){return;}
		this.int.unsubscribe();
		if(this.timer$){return;}
		this.timer$.unsubscribe();
		
	}
	createLoading () {
		this.loader = this.loadingCtrl.create({
			content: "Carregando"
		});
		this.loader.present();
	}
	createAlert() {
		let alert = this.alertCtrl.create({
			title: 'Você foi classificado!',
			subTitle: 'Por favor aguarde a próxima etapa.',
			buttons: ['Ok, vou aguardar.']
		});
		alert.present();
	}
	startGame () {
				// Inicia o Jogo
				this.game.status = "2";

				let time_game = parseInt(this.game.timeforgame.replace(':','').replace(':','')+'0'); 
				this.time_game=(time_game-(-1*1000))/1000;
				this.intS = interval(1000)
				.subscribe((i) => {
					console.log(this.time_game);

					if(i==time_game/1000) {this.intS.unsubscribe();return;}
					this.time_game=(time_game-(i*1000))/1000;
					this.time_percent = i/(time_game/1000)*100;
				});

				timer(time_game)
				.subscribe(() => this.endGame())
			}

			endGame () {

		
		// Finaliza o Jogo
		this.game.status = "1";
		timer(10000)
		.subscribe((data) => {
			this.loader.dismissAll();
			this.createAlert();


			this.clicks = 0;
			this.time_game=0;
			this.time_percent =0;
			this.start();
		})
		this.createLoading();
	}
}
