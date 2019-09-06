import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store'; // very important
import { simpleReducer } from './simpelreducer/simple.reducer';
import { postReducer } from './post.reducer';

import { StoreDevtoolsModule  } from '@ngrx/store-devtools';
import { SimpelreducerComponent } from './simpelreducer/simpelreducer.component';
import { StoringCenterComponent } from './storing-center/storing-center.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpelreducerComponent,
    StoringCenterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      message: simpleReducer, // important
      post: postReducer  // important
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10  // for dev tool
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
