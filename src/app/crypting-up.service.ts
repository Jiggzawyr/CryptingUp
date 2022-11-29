import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CryptingUpService {

  constructor(private httpClient: HttpClient) { }

  getExchanges() {
    return this.httpClient.get("https://cryptingup.com/api/exchanges");
  }

  getExchange(id: string) {
    return this.httpClient.get("https://cryptingup.com/api/exchanges/" + id);
  }

  getMarkets(){
    return this.httpClient.get("https://cryptingup.com/api/markets");
  }

  getExchangeMarkets(id: string){
    return this.httpClient.get("https://cryptingup.com/api/exchanges/" + id + "/markets");
  }

  getAssetMarkets(id: string){
    return this.httpClient.get("https://cryptingup.com/api/assets/" + id + "/markets");
  }

  getAssets(){
    return this.httpClient.get("https://cryptingup.com/api/assets");
  }

  getAsset(id: string){
    return this.httpClient.get("https://cryptingup.com/api/assets/" + id);
  }

  getAssetOverview(){
    return this.httpClient.get("https://cryptingup.com/api/assetsoverview/");
  }

}
