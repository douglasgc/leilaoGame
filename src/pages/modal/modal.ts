import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';

@Component({
  template: `
  <ion-content class="list-page">

  <ion-slides pager>

  <ion-slide *ngIf="localStorage.openVideo">
  <div style="width: 100%; text-align:center; color: #fff;">
  <img style="width: 160px;margin-top: 26px;" src="./assets/img/logo.png" />
  <h2>Bem vindo ao Fast Click App</h2><br>
  </div>

  <div style="text-align:center;" padding>
  <button (click)="dismiss()" ion-button round color="secondary">Jogar</button>
  </div>
  </ion-slide >
  <ion-slide *ngIf="!localStorage.openVideo">
  
  <video autoplay width="100%" controls>
    <source src="assets/video/video.mp4" type="video/mp4">
  </video>

  </ion-slide >
  </ion-slides>


  </ion-content>

  `
})
export class ModalPage {

  localStorage = localStorage;
  constructor(
    public viewCtrl: ViewController
    ) {
  }
  ngOnInit() {
    setInterval(()=>{
    let aud = document.querySelector("video");
    console.log(aud);
    aud.onended = () => this.endVideo();
    },5000)
  }
  endVideo() {
    localStorage.openVideo = true;
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}