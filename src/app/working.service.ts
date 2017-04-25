import { Injectable } from '@angular/core';

import {WorkList} from './working';
import { WorkingListComponent } from './mock-workinglist';

@Injectable()
export class WorkingService {
  getWorkingList(): Promise<WorkList[]> {
   return Promise.resolve(WorkingListComponent);
 }

 getWorkingListSlowly(): Promise<WorkList[]> {
   return new Promise(resolve => {
     setTimeout(() => resolve(this.getWorkingList()), 2000);
   });
 }
}
