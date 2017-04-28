//import { Injectable } from '@angular/core';
//import { workingListItems } from './mock-worklists';
import { WorkList } from './worklist';
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class WorkListService {
	//getWorkLists(): Promise<WorkList[]>{
		//return Promise.resolve(workingListItems);
	//}
	private headers = new Headers({'Content-Type': 'application/json'});
	private worklistsUrl = 'api/worklists';  // URL to web api
  constructor(private http: Http) { }
  getWorkLists(): Promise<WorkList[]> {
    return this.http.get(this.worklistsUrl)
               .toPromise()
               .then(response => response.json().data as WorkList[])
               .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getWorkList(id: number): Promise<WorkList> {
  const url = `${this.worklistsUrl}/${id}`;
  return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as WorkList)
    .catch(this.handleError);
}



update(worklist: WorkList): Promise<WorkList> {
  const url = `${this.worklistsUrl}/${worklist.id}`;
  return this.http
    .put(url, JSON.stringify(worklist), {headers: this.headers})
    .toPromise()
    .then(() => worklist)
    .catch(this.handleError);
}

create(name: string): Promise<WorkList> {
  return this.http
    .post(this.worklistsUrl, JSON.stringify({name: name}), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data as WorkList)
    .catch(this.handleError);
}

delete(id: number): Promise<void> {
  const url = `${this.worklistsUrl}/${id}`;
  return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
}
	//getWorkList(stt: number): Promise<WorkList> {
  //return this.getWorkLists()
            // .then(worklists => worklists.find(worklist => worklist.stt === stt));
}
