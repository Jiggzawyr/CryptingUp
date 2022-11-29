import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Asset } from '../Models/asset';
import { Market } from '../Models/market';
import { ActivatedRoute } from '@angular/router';
import { CryptingUpService } from '../crypting-up.service';

@Component({
  selector: 'app-asset-details',
  templateUrl: './asset-details.component.html',
  styleUrls: ['./asset-details.component.css']
})
export class AssetDetailsComponent implements OnInit {

  asset?: Asset;
  found: Boolean = true;
  markets: Market[] = [];

  constructor(
    private route: ActivatedRoute, 
    private cryptingUpService: CryptingUpService,
    private _location: Location
  ) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.cryptingUpService.getAsset(id).forEach((result) => {
      let json = JSON.parse(JSON.stringify(result));
      if(json.asset){
        this.asset = json.asset;
        if(this.asset){
          this.cryptingUpService.getAssetMarkets(this.asset.asset_id).forEach((result) => {
            let json = JSON.parse(JSON.stringify(result));
            this.markets = json.markets;
          })
        }
      } 
      else {
        this.found = false;
      }
    }).catch(error => {
      this.found = false;
    })
  }

  goBack(){
    this._location.back();
  }

}
