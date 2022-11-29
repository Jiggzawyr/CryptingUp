import { Component, OnInit } from '@angular/core';
import { CryptingUpService } from '../crypting-up.service';
import { Exchange } from '../Models/exchange';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {

  exchanges: Exchange[] = [];

  constructor(
    private cryptingUpService: CryptingUpService,
  ) { }

  ngOnInit(): void {
    this.cryptingUpService.getExchanges().forEach((result) => {
      let json = JSON.parse(JSON.stringify(result));
      this.exchanges = json.exchanges;
    })
  }

}
