import { Component, OnInit } from '@angular/core';


import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';



import { Post } from '../post.model';
import * as PostActions from '../post.action';

interface AppState {
message: string;
}


interface App2State {
  post: Post;
}



@Component({
  selector: 'app-storing-center',
  templateUrl: './storing-center.component.html',
  styleUrls: ['./storing-center.component.css']
})
export class StoringCenterComponent implements OnInit {

  message: Observable<string>;

  post: Observable<Post>;

  constructor( private store: Store<AppState>,
               private store2: Store<App2State> ) {
    this.message = this.store.select('message');
    this.post = this.store2.select('post');
   }
  ngOnInit() {
    this.store.select('message')
        .subscribe(mes => console.log(mes));

    this.store.select('post')
        .subscribe(mes => {
          console.log(mes.likes);
          console.log(mes.text);
        });
     this.changeSipmleREd();
     this.changePost();
  }

  changeSipmleREd() {
    setTimeout(() => {
      this.store.dispatch({ type: 'SPANISH' });
    }, 4000);
  }

  changePost() {
    setTimeout(() => {
      this.store2.dispatch(new PostActions.EditTExt('new TExt Edit from Storing Center'));
    }, 6000);
  }

}
