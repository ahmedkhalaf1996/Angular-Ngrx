import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Post } from './post.model';
import * as PostActions from './post.action';



interface AppState {
  post: Post;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   post: Observable<Post>

   text: string; /// from input val

   constructor(private store: Store<AppState>){
      this.post = this.store.select('post')
  }

  editText() {
    this.store.dispatch(new PostActions.EditTExt(this.text) )
  }

  resetPost() {
    this.store.dispatch( new PostActions.Reset() )
  }

  upvote() {
    this.store.dispatch( new PostActions.Upvote() )
  }

   downvote() {
     this.store.dispatch( new PostActions.Downvote() )
   }

}
