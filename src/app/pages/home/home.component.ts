import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/types/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // Dependencies
  constructor(private postService: PostService) {}
  // Properties
  public posts: Post[] = [];

  ngOnInit(): void {
    this.postService.getAllPost().subscribe({
      next: (response) => {
        this.posts = response;
      },
      error: (err) => {
        console.log('[post_error]', err);
      },
    });
  }
}
