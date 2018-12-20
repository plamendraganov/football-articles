import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestDataService {
  private _articleUrl = 'https://api.myjson.com/bins/sw3sg'

  constructor(private _http: HttpClient) { }

  getData() {
    return this._http.get(this._articleUrl);
  }
}
