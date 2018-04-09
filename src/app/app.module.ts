import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { ListPage } from '../pages/list/list';
import { BrMaskerModule } from 'brmasker-ionic-3';

import { GamePage } from '../pages/game/game';
import { PlayerPage } from '../pages/game/player/player';
import { PlayerService } from '../pages/game/player/player.service';


import { ListGamePage } from '../pages/game/list/list';
import { ListService } from '../pages/game/list/list.service';


import { LoginService } from '../pages/login/login.service';
import { CadastroService } from '../pages/cadastro/cadastro.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    CadastroPage,
    GamePage,
    ListGamePage,
    ListPage,
    PlayerPage
  ],
  imports: [
    BrowserModule,
    BrMaskerModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CadastroPage,
    LoginPage,
    GamePage,
    ListGamePage,
    ListPage,
    PlayerPage
  ],
  providers: [
    StatusBar,
    CadastroService,
    PlayerService,
    ListService,
    LoginService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
