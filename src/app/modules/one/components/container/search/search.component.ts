import { Component, OnInit, Output } from '@angular/core';
import { Subject, BehaviorSubject, Subscription } from 'rxjs';
import {
  tap,
  switchMap,
  concatMap,
  mergeMap,
  debounceTime,
  filter,
} from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { LoggerService } from 'src/app/modules/shared/services/logger.service';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchKeySubscription: Subscription;
  lastSearchKey;
  searchKey$ = new Subject();
  langField = new FormControl();
  langs$ = new BehaviorSubject<any>([]); // empty languages array - initial state

  constructor(
    private logger: LoggerService,
    public searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.listenToSearchKey();
  }

  listenToSearchKey() {
    this.searchKeySubscription = this.searchKey$
      .pipe(
        debounceTime(400),
        filter((val) => !!val && this.lastSearchKey != val),
        tap((val) => {
          this.logger.log('Calling Backend API with Search Key: ', 'info');
          this.logger.log(val, 'info');
          this.lastSearchKey = val;
        }),
        switchMap((val) => this.searchService.searchLang(val)),
        tap((langs) => {
          this.logger.log('Backend response received: ', 'warn');
          this.logger.log(langs, 'warn');
        })
      )
      .subscribe((langs) => this.langs$.next(langs));
  }

  ngOnDestroy() {
    this.searchKeySubscription.unsubscribe();
  }
}
