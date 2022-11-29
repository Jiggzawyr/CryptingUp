import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { ExchangeDetailsComponent } from './exchange-details/exchange-details.component';
import { MarketComponent } from './market/market.component';
import { AssetComponent } from './asset/asset.component';
import { AssetDetailsComponent } from './asset-details/asset-details.component';
import { MarketListComponent } from './market-list/market-list.component';
import { VolumeListComponent } from './volume-list/volume-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeComponent,
    ExchangeDetailsComponent,
    MarketComponent,
    AssetComponent,
    AssetDetailsComponent,
    MarketListComponent,
    VolumeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
