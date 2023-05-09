import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Post } from 'src/types/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private _http: HttpClient) {}

  /*
    ↓ These methods allow read and execute actions in /posts API
  */

  /* Get all posts */
  public getAllPost(): Observable<Post[]> {
    return this._http.get<Post[]>(`${environment.baseUrl}/posts`);
  }

  /* Delete one post receiving its id */
  public delete(id: number) {
    return this._http.delete(`${environment.baseUrl}/posts/${id}`);
  }

  /* Create a new post, receiving the userId, title and body */
  public create({ userId, title, body }: Partial<Post>) {
    console.log("[create]", { userId, title, body})
    return this._http.post(`${environment.baseUrl}/posts`, { userId, title, body });
  }

  /* Update a exist post */
  public update({ id, userId, title, body }: Post): Observable<Post> {
    console.log("[update]", { id, userId, title, body})
    return this._http.put<Post>(`${environment.baseUrl}/posts/${id}`, { id, userId, title, body });
  }
}
