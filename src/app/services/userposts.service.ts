import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment.development';
import { UserPost } from '../models/userpost.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserpostsService {

  baseApiUrl = 'https://localhost:7156/api/content';
  constructor(private http: HttpClient) { }

  getAllUserPosts(): Observable<UserPost[]> {
    return this.http.get<UserPost[]>(this.baseApiUrl + 'allposts')

  }
}
