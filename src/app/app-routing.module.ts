import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddPostComponent } from './admin/admin-add-post/admin-add-post.component';
import { AdminPostsComponent } from './admin/admin-posts/admin-posts.component';
import { AdminViewPostComponent } from './admin/admin-view-post/admin-view-post.component';
import { UserpostsListComponent } from './components/userposts/userposts-list/userposts-list.component';

const routes: Routes = [
  {
    path: '',
    component: UserpostsListComponent
  },
  {
    path: 'userposts',
    component: UserpostsListComponent
  },
  {
    path: 'admin/posts',
    component: AdminPostsComponent
  },
  {
    path: 'admin/posts/add',
    component: AdminAddPostComponent
  },
  {
    path: 'admin/posts/:id',
    component: AdminViewPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
