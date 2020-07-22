import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { LoggerService } from 'src/app/modules/shared/services/logger.service';
import { of, range, forkJoin } from 'rxjs';
import { toArray } from 'rxjs/operators';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  numbersOneToHundred$ = range(1,100).pipe(toArray());
  panels$ = forkJoin(this.numbersOneToHundred$, this.numbersOneToHundred$);
  @ViewChildren('panel') panels: QueryList<ElementRef>;
  constructor(private logger: LoggerService) { }

  ngOnInit(): void {
    this.logger.clear();
    this.logger.log('welcome to Exercise five!', 'warn');
  }

}
