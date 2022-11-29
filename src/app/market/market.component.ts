import { Component, OnInit } from '@angular/core';
import { CryptingUpService } from '../crypting-up.service';
import { Asset } from '../Models/asset';
import { Market } from '../Models/market';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  markets: Market[] = [];
  assets: Asset[] = [];
  baseAssetFilter: string = "";

  constructor(
    private cryptingUpService: CryptingUpService,
  ) { }

  ngOnInit(): void {
    this.getMarkets();
    this.cryptingUpService.getAssetOverview().forEach((result) => {
      let json = JSON.parse(JSON.stringify(result));
      this.assets = json.assets.sort((a: Asset,b: Asset) => {
        return ((a.asset_id < b.asset_id) ? -1 : ((a.asset_id > b.asset_id) ? 1 : 0));
      });
    })
  }

  getMarkets(){
    this.cryptingUpService.getMarkets().forEach((result) => {
      let json = JSON.parse(JSON.stringify(result));
      this.markets = json.markets.filter( (market: Market) => {
        return ((market.base_asset == this.baseAssetFilter) || this.baseAssetFilter == "")
      });
    })
  }

  search(){
    this.getMarkets();
  }
  
  clear(){
    this.baseAssetFilter = "";
    this.getMarkets();
  }

}
