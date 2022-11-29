import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetDetailsComponent } from './asset-details/asset-details.component';
import { AssetComponent } from './asset/asset.component';
import { ExchangeDetailsComponent } from './exchange-details/exchange-details.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { MarketComponent } from './market/market.component';

const routes: Routes = [
  { path: 'exchange', component: ExchangeComponent },
  { path: 'exchange/:id', component: ExchangeDetailsComponent },
  { path: 'market', component: MarketComponent },
  { path: 'asset', component: AssetComponent },
  { path: 'asset/:id', component: AssetDetailsComponent },
  { path: '',   redirectTo: '/exchange', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
