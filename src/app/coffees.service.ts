import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoffeesService {
  slice: any;

  constructor(private http:HttpClient) { }

  getData() {
    let url = "https://random-data-api.com/api/coffee/random_coffee?size=50";
    return this.http.get(url);
  }

}
