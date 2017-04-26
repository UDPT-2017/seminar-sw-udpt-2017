import { Injectable } from '@angular/core';
import { workingListItems } from './mock-worklists';
import { WorkList } from './worklist';


@Injectable()
export class WorkListService {
	getWorkLists(): Promise<WorkList[]>{
		return Promise.resolve(workingListItems);
	}

	getWorkList(stt: number): Promise<WorkList> {
  return this.getWorkLists()
             .then(worklists => worklists.find(worklist => worklist.stt === stt));
}
}