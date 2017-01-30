import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.router';

import { AppComponent }  from './app.component';
import { MessageComponent }  from './message/message.component';
import { MessageService }  from './shared/message.service';

@NgModule({
  imports:      [
    BrowserModule,
      routing,
      FormsModule,
      HttpModule
  ],
  declarations: [
    AppComponent,
      MessageComponent
  ],
  providers:[
      MessageService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
