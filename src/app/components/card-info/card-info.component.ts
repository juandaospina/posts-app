import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
})
export class CardInfoComponent implements OnInit {
  constructor(private _postService: PostService) {}

  public totalPosts!: number;

  ngOnInit(): void {
    this._postService.getAllPost().subscribe({
      next: (response) => {
        this.totalPosts = response.length;
      },
    });
  }
}
