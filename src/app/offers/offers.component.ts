import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Offer} from "./offer/offer";


@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  private url = 'http://localhost:3000/offers';
  offers: Offer[] = [];
  headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
    http.get<Offer[]>(this.url, {headers: this.headers})
      .subscribe(response => {
        this.offers = response;
      })
  }

  ngOnInit(): void {
  }

  convert(id: string) {
    switch (id) {
      case '1':
        return "Kupię";
      case '2':
        return "Sprzedam";
      case '3':
        return "Zamienię";
      case '4':
        return "Oddam za darmo";
      default:
        return "Bląd";
    }
  }
}
