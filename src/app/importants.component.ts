import { Component,OnInit } from '@angular/core';

import { WorkList } from './worklist';


import { WorkListService } from './worklist.service';





@Component({
  selector: 'my-imps',
  templateUrl: './importants.component.html'
})
export class ImpComponent implements OnInit { 

worklists: WorkList[] =[];
constructor(private worklistService: WorkListService) { }

 ngOnInit(): void {
 	this.worklistService.getWorkLists().then(worklists => this.worklists = worklists.slice(1, 5));
    
  }

}