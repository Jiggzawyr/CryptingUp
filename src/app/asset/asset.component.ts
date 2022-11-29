import { Component, OnInit } from '@angular/core';
import { CryptingUpService } from '../crypting-up.service';
import { Asset } from '../Models/asset';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit {

  assets: Asset[] = [];
  sortBy: string = "";
  sortOptions: string[] = ["Price","Volume 24h","Change 1h","Change 24h","Change 7d","Total supply"];

  constructor(
    private cryptingUpService: CryptingUpService,
  ) { }

  ngOnInit(): void {
    this.getAssets();
  }

  getAssets(){
    this.cryptingUpService.getAssets().forEach((result) => {
      let json = JSON.parse(JSON.stringify(result));
      this.assets = json.assets.sort( (a:Asset, b:Asset) => {
        switch(this.sortBy){
          case "Price": return ((a.price < b.price) ? -1 : ((a.price > b.price) ? 1 : 0));
          case "Volume 24h": return ((a.volume_24h < b.volume_24h) ? -1 : ((a.volume_24h > b.volume_24h) ? 1 : 0));
          case "Change 1h": return ((a.change_1h < b.change_1h) ? -1 : ((a.change_1h > b.change_1h) ? 1 : 0));
          case "Change 24h": return ((a.change_24h < b.change_24h) ? -1 : ((a.change_24h > b.change_24h) ? 1 : 0));
          case "Change 7d": return ((a.change_7d < b.change_7d) ? -1 : ((a.change_7d > b.change_7d) ? 1 : 0));
          case "Total supply": return ((a.total_supply < b.total_supply) ? -1 : ((a.total_supply > b.total_supply) ? 1 : 0));
          default: return 0;
        }
      });
    })
  }

  clear(){
    this.sortBy = "";
    this.getAssets();
  }

  sort(){
    console.log("SORT")
    this.getAssets();
  }

}
