import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { WorkingListComponent } from './working-list.component';

@NgModule({
  imports:      [ BrowserModule , FormsModule],
  declarations: [ AppComponent,  WorkingListComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
