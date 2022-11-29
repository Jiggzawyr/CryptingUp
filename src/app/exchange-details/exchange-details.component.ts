import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CryptingUpService } from '../crypting-up.service';
import { Exchange } from '../Models/exchange';
import { Location } from '@angular/common';
import { Market } from '../Models/market';

@Component({
  selector: 'app-exchange-details',
  templateUrl: './exchange-details.component.html',
  styleUrls: ['./exchange-details.component.css']
})
export class ExchangeDetailsComponent implements OnInit {

  exchange?: Exchange;
  found: Boolean = true;
  markets: Market[] = [];

  constructor(
    private route: ActivatedRoute, 
    private cryptingUpService: CryptingUpService,
    private _location: Location
  ) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.cryptingUpService.getExchange(id).forEach((result) => {
      let json = JSON.parse(JSON.stringify(result));
      if(json.exchange){
        this.exchange = json.exchange;
        if(this.exchange){
          this.cryptingUpService.getExchangeMarkets(this.exchange.exchange_id).forEach((result) => {
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
