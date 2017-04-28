import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { WorkingListComponent } from './working-list.component';
import { WorkListsComponent } from './worklists.component';
import { WorkListService } from './worklist.service';
import { ImpComponent } from './importants.component';
import { WorkSearchComponent} from './work-search.component';

@NgModule({
  imports:      [ BrowserModule ,
  HttpModule,
  InMemoryWebApiModule.forRoot(InMemoryDataService),
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
  path: 'detail/:id',
  component:  WorkingListComponent
	},
])
   ],
  declarations: [ AppComponent,  WorkingListComponent, WorkListsComponent, ImpComponent, WorkSearchComponent],
  providers: [WorkListService],
  bootstrap:    [ AppComponent ]
})


export class AppModule { }
