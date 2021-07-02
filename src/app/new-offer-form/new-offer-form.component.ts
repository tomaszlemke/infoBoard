import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";


@Component({
  selector: 'new-offer-form',
  templateUrl: './new-offer-form.component.html',
  styleUrls: ['./new-offer-form.component.css']
})
export class NewOfferFormComponent {
  private url = 'http://localhost:3000/offers';
  posts: any = [];
  headers = new HttpHeaders({'Content-Type': 'application/json'});

  categories = [
    {id: 1, name: 'Kupię'},
    {id: 2, name: 'Sprzedam'},
    {id: 3, name: 'Zamienię'},
    {id: 4, name: 'Oddam za darmo'}

  ];

  constructor(private http: HttpClient, private router: Router) {
    http.get(this.url)
      .subscribe(response => {
        this.posts = response;
      })
  }

  createPost(input: HTMLInputElement) {

    this.http.post(this.url, JSON.stringify(input), {headers: this.headers})
      .subscribe(response => this.redirect())
  }

  redirect() {
    this.router.navigate(['./offers']);
  }

}

