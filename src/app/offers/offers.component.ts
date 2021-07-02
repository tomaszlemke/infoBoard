import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import { Observable } from "rxjs";
import {Config} from "../config/config.service";
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
    http.get<Offer[]>(this.url, {headers : this.headers})
      .subscribe(response => {
        this.offers = response;
      })
  }


  /*createPost(input: HTMLInputElement) {
    let post: any = { title: input.value}
    input.value = '';

    this.http.post(this.url, JSON.stringify(post),{headers: this.headers})
      .subscribe(response => {
        post.id = response;
        post.title = response;
        this.posts.splice(0,0,post.title)
        console.log(response)
      })
  }*/

  ngOnInit(): void {

  }

}
