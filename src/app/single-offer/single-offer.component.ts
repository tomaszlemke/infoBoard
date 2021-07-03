import { Component, OnInit } from '@angular/core';
import {Offer} from "../offers/offer/offer";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {OfferListService} from "../../services/offer-list.service";

@Component({
  selector: 'app-single-offer',
  templateUrl: './single-offer.component.html',
  styleUrls: ['./single-offer.component.css']
})
export class SingleOfferComponent implements OnInit {

  offer?: Offer;
  private url = 'http://localhost:3000/offers';

  constructor(private http: HttpClient, private route: ActivatedRoute,
              private router: Router, private service: OfferListService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.url += "/" + params['id'];
      this.service.getSingeOffer(this.url)
        .subscribe(offer => this.offer = offer);
    })
  }

  goBack() {
    this.router.navigate(['/offers'])
  }
  toggle(offer: Offer){
    offer.isSelected =!offer.isSelected;
    this.http.put<Offer>(this.url, offer)
    .subscribe()
  }

  deleteOffer(){
     this.service.deleteOffer(this.url)
       .subscribe()
    this.router.navigate(['/offers'])
  }

}
