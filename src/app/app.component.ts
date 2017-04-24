import { Component } from '@angular/core';
import { WorkingListComponent } from './working-list.component';

@Component({
  selector: 'my-app',
  template: `
      This is an app component
      <working-list></working-list>
  `,
  directives: [WorkingListComponent]
})
export class AppComponent  {  }
