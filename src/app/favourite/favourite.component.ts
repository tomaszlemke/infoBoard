import { Component } from '@angular/core';

@Component({
  selector: 'wybrana',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent {
  isFavorite: boolean = false;

  onClick(){
    this.isFavorite = !this.isFavorite
  }
}
