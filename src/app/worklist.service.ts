import { Injectable } from '@angular/core';
import { workingListItems } from './mock-worklists';
import { WorkList } from './worklist';


@Injectable()
export class WorkListService {
	getWorkLists(): Promise<WorkList[]>{
		return Promise.resolve(workingListItems);
	}
}