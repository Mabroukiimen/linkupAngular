import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {
 
  ngOnInit(): void {
  }

  posts:any
  constructor(private postService: PostService) {
    this.postService.getAllPosts().subscribe((data: any)=>this.posts=data)
  }


}
