import { Component, OnInit } from '@angular/core';
import {Offer} from "../offers/offer/offer";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-selected-offers',
  templateUrl: './selected-offers.component.html',
  styleUrls: ['./selected-offers.component.css']
})
export class SelectedOffersComponent {
  private url = 'http://localhost:3000/offers';
  offers: Offer[] = [];
  headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
    http.get<Offer[]>(this.url, {headers : this.headers})
      .subscribe(response => {
        this.offers = response;
      })
  }

}
