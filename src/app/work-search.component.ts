import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { WorkSearchService } from './work-search.service';
import { WorkList } from './worklist';
@Component({
  selector: 'work-search',
  templateUrl: './work-search.component.html',
  styleUrls: [ './work-search.component.css' ],
  providers: [WorkSearchService]
})
export class WorkSearchComponent implements OnInit {
  worklists: Observable<WorkList[]>;
  private searchTerms = new Subject<string>();
  constructor(
    private workSearchService: WorkSearchService,
    private router: Router) {}
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.worklists = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.workSearchService.search(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<WorkList[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<WorkList[]>([]);
      });
  }
  gotoDetail(worklist: WorkList): void {
    let link = ['/detail', worklist.id];
    this.router.navigate(link);
  }
}