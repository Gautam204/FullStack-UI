import { DatePipe } from '@angular/common'; //<!-- 12nd may 2023 -->
import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { AddPostRequest } from 'src/app/models/add-post.model';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-admin-add-post',
  templateUrl: './admin-add-post.component.html',
  styleUrls: ['./admin-add-post.component.css']
})
export class AdminAddPostComponent implements OnInit {

  constructor(private postService: PostService, private datePipe: DatePipe) { }//<!-- 12nd may 2023 -->

  post: AddPostRequest = {
    //name: '', //<!-- 03rd may 2023 -->
    isScheduledPost: true,
    //publishOnDate: '', //removed
    publishOnTime: '', // added //added 1st May
    title: '',
    postType: 'Text',
    postContentText: '',
    postAttachmentURL: '',
    postStatus: 'Scheduled',
    userName:'Gautam',
    socialNetworkType: ''

  }

  ngOnInit(): void {
    
  }

  onSubmit() : void {
    this.postService.addPost(this.post)
    .subscribe(
      response => {
        alert('The content has been Successfully posted for the user ' + this.post.userName);
        //
            // Code for posting to twitter by getting infor,ation from User Scoial Accounts table
            // using Username and SocialAccounttype id
        //
      }
    );

  }

}
