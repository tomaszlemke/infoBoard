import { Component, OnInit } from '@angular/core';
import {Offer} from "../offers/offer/offer";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  offer? :Offer;
  private url = 'http://localhost:3000/offers';
  headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location) { }

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   this.url += "/" + params['id'];
    //   this.http.get<Offer>(this.url)
    //     .subscribe(offer => this.offer = offer);
    // })
  }

}
