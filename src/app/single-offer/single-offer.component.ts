import { Component, OnInit } from '@angular/core';
import {Offer} from "../offers/offer/offer";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-single-offer',
  templateUrl: './single-offer.component.html',
  styleUrls: ['./single-offer.component.css']
})
export class SingleOfferComponent implements OnInit {

  offer?: Offer;
  private url = 'http://localhost:3000/offers';
  headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.url += "/" + params['id'];
      this.http.get<Offer>(this.url)
        .subscribe(offer => this.offer = offer);
    })
  }
}