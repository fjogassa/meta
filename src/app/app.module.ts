import { MetaPage } from './../pages/meta/meta';
import { MetasService } from './../services/metas';
import { MetasPage } from './../pages/metas/metas';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CategoriasPage } from './../pages/categorias/categorias';
import { CompromissoPage } from './../pages/compromisso/compromisso';


@NgModule({
  declarations: [
    MyApp,
    HomePage,    
    TabsPage,
    CompromissoPage,
    CategoriasPage,
    MetasPage,
    MetaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,    
    TabsPage,
    CompromissoPage,
    CategoriasPage,
    MetasPage,
    MetaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MetasService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
