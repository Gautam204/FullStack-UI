import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserpostsListComponent } from './components/userposts/userposts-list/userposts-list.component';
import { AdminPostsComponent } from './admin/admin-posts/admin-posts.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminViewPostComponent } from './admin/admin-view-post/admin-view-post.component';
import { FormsModule } from '@angular/forms';
import { AdminAddPostComponent } from './admin/admin-add-post/admin-add-post.component';
import { DatePipe } from '@angular/common'; //<!-- 12nd may 2023 -->

@NgModule({
  declarations: [
    AppComponent,
    UserpostsListComponent,
    AdminPostsComponent,
    AdminViewPostComponent,
    AdminAddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatePipe], //<!-- 12nd may 2023 -->
  bootstrap: [AppComponent]
})
export class AppModule { }
