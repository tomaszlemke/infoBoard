import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ulubione',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  isFavorite: boolean = false;

  ngOnInit(): void {
  }

  onClick(){
    this.isFavorite = !this.isFavorite
  }
}
