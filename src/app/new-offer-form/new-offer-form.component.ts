import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {OfferListService} from "../../services/offer-list.service";

@Component({
  selector: 'new-offer-form',
  templateUrl: './new-offer-form.component.html',
  styleUrls: ['./new-offer-form.component.css']
})
export class NewOfferFormComponent implements OnInit{
  posts: any = [];

  categories = [
    {id: 1, name: 'Kupię'},
    {id: 2, name: 'Sprzedam'},
    {id: 3, name: 'Zamienię'},
    {id: 4, name: 'Oddam za darmo'}
  ];

  constructor(private http: HttpClient,
              private router: Router,
              private service: OfferListService) {
  }

  ngOnInit() {
    this.service.getOffers()
      .subscribe(response => {
        this.posts = response;
      })
  }

  createPost(input: HTMLInputElement) {
    this.service.addOffer(input)
      .subscribe(response => this.redirect())
  }

  redirect() {
    this.router.navigate(['./offers']);
  }

}

