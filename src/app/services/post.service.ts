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
}
