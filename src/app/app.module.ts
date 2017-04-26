import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { WorkingListComponent } from './working-list.component';
import { WorkListsComponent } from './worklists.component';
import { WorkListService } from './worklist.service';
import { ImpComponent } from './importants.component';

@NgModule({
  imports:      [ BrowserModule ,
   FormsModule,
   RouterModule.forRoot([
  {
    path: 'worklists',
    component: WorkListsComponent
  },
  {
   path: 'imps',
  component: ImpComponent
	},
	{
  path: '',
  redirectTo: '/imps',
  pathMatch: 'full'
	},
	{
  path: 'detail/:stt',
  component:  WorkingListComponent
	},
])
   ],
  declarations: [ AppComponent,  WorkingListComponent, WorkListsComponent, ImpComponent],
  providers: [WorkListService],
  bootstrap:    [ AppComponent ]
})


export class AppModule { }
