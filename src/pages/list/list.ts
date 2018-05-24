import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { CadastroPage } from '../cadastro/cadastro';
import { Facebook } from '@ionic-native/facebook';
import { GamePage } from '../game/game';

@Component({
	selector: 'page-list',
	templateUrl: 'list.html'
})
export class ListPage {

	login:any = LoginPage;
	cadastro:any = CadastroPage;
	game:any = GamePage;
	permissions:Array<string> = ["public_profile", "email"];
	constructor(public navCtrl: NavController, public navParams: NavParams, public fb: Facebook) {

	}

	loginFacebook () {
		this.fb.login(this.permissions).then((response) => {
			this.fb.api("/me?fields=name,email", [])
			.then(res => {
				console.log(res);
			}, (error) => {
				alert(error);
				console.log('ERRO LOGIN: ',error);
			})
		});
	}

}
