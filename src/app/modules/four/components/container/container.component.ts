import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/modules/shared/services/logger.service';
import { DataService } from '../../services/data.service';
import { catchError, tap, mapTo, takeWhile } from 'rxjs/operators';
import { of, timer, merge } from 'rxjs';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  constructor(
    private logger: LoggerService,
    private dataService: DataService
  ) {}
  data: any;
  ngOnInit(): void {
    this.logger.clear();
    this.logger.log('welcome to Exercise four!', 'warn');
  }

  triggerFetchData() {
    const timer$ = timer(5000).pipe(mapTo('takingTooLong'));
    const resp$ = this.dataService.fetchData(6000, true);

    merge(timer$, resp$)
      .pipe(
        catchError(e => {
          return of({ error: true, message: e.message });
        }),
        tap(val => {
          this.logger.log('response from Backend: ', 'warn');
          this.logger.log(val, 'warn');
        }),
        takeWhile(val => val === 'loading' || val === 'takingTooLong', true)
      )
      .subscribe(data => (this.data = data));
  }
}
