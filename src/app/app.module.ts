import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { IonicStorageModule } from '@ionic/storage-angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http'
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SwiperModule } from 'swiper/angular';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,SwiperModule, Ng2SearchPipeModule,HttpClientModule,RoundProgressModule,NgCircleProgressModule
    // IonicStorageModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
