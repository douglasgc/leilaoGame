import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';

@Component({
  template: `
<ion-content class="list-page">

  <ion-slides pager>

  <ion-slide >
  <div style="width: 100%; text-align:center; color: #fff;">
    <img style="width: 160px;margin-top: 26px;" src="./assets/img/logo.png" />
    <h2>Bem vindo ao Fast Click App</h2><br>
  </div>

  <div style="text-align:center;" padding>
  <button (click)="dismiss()" ion-button round color="secondary">Jogar</button>
  </div>
  </ion-slide >
  </ion-slides>


  </ion-content>

  `
})
export class ModalPage {

  constructor(
    public viewCtrl: ViewController
    ) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}