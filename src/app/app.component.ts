

import { Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template:`
   <h1>{{title}}</h1>
   <button> <a routerLink="/worklists">To-Do Things</a></button>
    <button> <a routerLink="/imps">important works</a></button>
   <router-outlet></router-outlet>
  `
})
export class AppComponent{
	title = "this is my demo!";

}