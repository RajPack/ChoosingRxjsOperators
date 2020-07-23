import { Injectable } from '@angular/core';
import { BackendService } from '../../shared/services/backend.service';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data$: Subject<any>;
  constructor(private backend: BackendService) {
    this.setMockDBResponses();
  }
  setMockDBResponses() {
    this.backend.setResponse({
      randomData: failRequested => {
        if (failRequested) {
          throw new Error('Random Backend error');
        }
        return 'This statement is the backend response!!';
      }
    });
  }

  fetchData(additionalDelay = 400, fail = false) {
    this.data$ = new BehaviorSubject('loading'); // reset data when fetch call in progress

    setTimeout(() => {
      this.backend.Get('randomData', fail).subscribe(
        data => this.data$.next(data),
        err => this.data$.error(err),
        () => this.data$.complete()
      );
    }, additionalDelay);
    return this.data$;
  }
}
