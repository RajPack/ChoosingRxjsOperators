import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, forkJoin, of, combineLatest } from 'rxjs';
import { DataService } from '../services/data.service';
import { switchMap, map, startWith, skipWhile } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PreFetchDataGuard implements Resolve<any> {
  constructor(private dataService: DataService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const topics$ = this.dataService.fetchTopics().pipe(startWith('loading'));

    const detail$ = topics$
      .pipe(
        skipWhile(topics => topics === 'loading'),
        switchMap((topics: string[]) => {
          const firstTopic = topics[0];
          const topicDetail$ = this.dataService.fetchTopicData(firstTopic);
          return topicDetail$;
        })
      )
      .pipe(startWith('loading'));

    const combined$ = combineLatest([topics$, detail$]).pipe(
      map(dataArr => ({ topics: dataArr[0], detail: dataArr[1] }))
    );

    return of(combined$);
  }
}
