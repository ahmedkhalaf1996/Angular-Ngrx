import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface AppState {
message: string;
}


@Component({
  selector: 'app-simpelreducer',
  templateUrl: './simpelreducer.component.html',
  styleUrls: ['./simpelreducer.component.css']
})
export class SimpelreducerComponent implements OnInit {

  message: Observable<string>;

  next: string;

  constructor(private store: Store<AppState>) {
    this.message = this.store.select('message');
   }

  ngOnInit() {
 //   this.spanch()
  }


  async spanch(){
    this.store.dispatch({ type: 'SPANISH' });
    this.store.select('message').
        subscribe(mes => console.log(this.next = mes));

  }

}
