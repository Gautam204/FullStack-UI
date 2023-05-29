import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-userposts-list',
  templateUrl: './userposts-list.component.html',
  styleUrls: ['./userposts-list.component.css']
})
export class UserpostsListComponent implements OnInit {

  constructor(private postService: PostService) { }

  posts: Post[] = [];
  
  ngOnInit(): void {
    this.postService.getAllPosts()
    .subscribe(
      response => {
        this.posts = response;
      }
    );
    
  }

}
