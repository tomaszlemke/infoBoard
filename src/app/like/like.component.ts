import {Component, Input} from '@angular/core';


@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent {
  @Input('isLiked') isLiked: boolean = false;
  @Input('likesCount') likesCount: number = 0;

  onClick(){
    this.likesCount += (this.isLiked) ?-1 : 1;
    this.isLiked = !this.isLiked;
  }
}
