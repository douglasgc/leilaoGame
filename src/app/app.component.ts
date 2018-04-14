import { Component, ViewChild } from '@angular/core';
import { Nav, NavController, Platform,ModalController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ListPage } from '../pages/list/list';
import { GamePage } from '../pages/game/game';
import { RankingPage } from '../pages/ranking/ranking';

import { ModalPage } from '../pages/modal/modal';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any;

  constructor(public navCtrl: NavController,public modalCtrl: ModalController, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    let modal = this.modalCtrl.create(ModalPage);

    modal.onDidDismiss(data => {
      this.navCtrl.setRoot(GamePage);
    });
    modal.present();

  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}
