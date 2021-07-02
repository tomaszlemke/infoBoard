import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Offer} from "../app/offers/offer/offer";

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private url = 'http://localhost:3000/offers';
  headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getOffers() {
    return this.http.get(this.url);
  }

  createOffers(offer: Offer) {
   return this.http.post(this.url, JSON.stringify(offer),{headers: this.headers})
  }

}

