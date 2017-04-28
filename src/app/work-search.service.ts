import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { WorkList }           from './worklist';
@Injectable()
export class WorkSearchService {
  constructor(private http: Http) {}
  search(term: string): Observable<WorkList[]> {
    return this.http
               .get(`app/worklists/?name=${term}`)
               .map(response => response.json().data as WorkList[]);
  }
}