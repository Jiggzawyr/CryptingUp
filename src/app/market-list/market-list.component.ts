import { Component, Input, OnInit } from '@angular/core';
import { Market } from '../Models/market';

@Component({
  selector: 'app-market-list',
  templateUrl: './market-list.component.html',
  styleUrls: ['./market-list.component.css']
})
export class MarketListComponent implements OnInit {

  @Input()
  markets: Market[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
