import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Offer} from "../app/offers/offer/offer";

@Injectable({
  providedIn: 'root'
})
export class OfferListService {
  private url = 'http://localhost:3000/offers';
  headers = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) {
  }

  getOffers(): Observable<Offer>{
    return this.http.get<Offer>(this.url)
  }

  getSingeOffer(newpath: any): Observable<Offer>{
    return this.http.get<Offer>(newpath)
  }

  addOffer(input: any): Observable<Offer>{
    return this.http.post<Offer>(this.url, JSON.stringify(input), {headers: this.headers})
  }

  deleteOffer(newpath: any){
   return this.http.delete(newpath)
  }

}
