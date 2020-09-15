import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LogoutPage} from "../pages/logout/logout";
import {LoginPage} from "../pages/login/login";
import {Comunicaciones} from "../providers/comunicaciones/comunicaciones";
import {HttpModule} from "@angular/http";
import { AuthServiceProvider } from '../providers/autho-service/autho-service';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '7ee1bfcc'
  }
};
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    //añadimos el nuevo componente generado
    LogoutPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp , {}, {
      links: [
        {component: TabsPage, name:'HomePage', segment:'HomePage'},
        {component: LoginPage, name:'LoginPage', segment:'LoginPage'}

      ]
    }),
    //importante para realizar las llamadas
    HttpModule,
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    //añadimos el nuevo componente generado
    LogoutPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    Comunicaciones
  ]
})
export class AppModule {}
