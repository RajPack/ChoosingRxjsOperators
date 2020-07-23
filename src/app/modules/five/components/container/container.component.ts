import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ElementRef,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import { LoggerService } from 'src/app/modules/shared/services/logger.service';
import {
  range,
  forkJoin,
  fromEvent,
  BehaviorSubject,
  Subscription,
  asyncScheduler
} from 'rxjs';
import {
  toArray,
  pluck,
  map,
  tap,
  switchMap,
  filter,
  debounceTime,
  take,
  throttleTime
} from 'rxjs/operators';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, AfterViewInit, OnDestroy {
  // generating panel data
  numbersOneToHundred$ = range(1, 100).pipe(toArray());
  panels$ = forkJoin([this.numbersOneToHundred$, this.numbersOneToHundred$]);

  @ViewChildren('panel') panelElems: QueryList<ElementRef>;

  // prevent feedback loop
  elementInScroll$ = new BehaviorSubject(null);
  resetElementInScroll$ = this.elementInScroll$.pipe(
    debounceTime(500),
    tap(() => this.elementInScroll$.next(null))
  );
  resetElementInScrollSubscription: Subscription;

  constructor(private logger: LoggerService) {}

  ngOnInit(): void {
    this.logger.clear();
    this.logger.log('welcome to Exercise five!', 'warn');
    this.resetElementInScrollSubscription = this.resetElementInScroll$.subscribe();
  }

  ngAfterViewInit() {
    this.panelElems.forEach(elemRef =>
      this.bindScrollEvent(elemRef.nativeElement)
    );
  }

  bindScrollEvent(elem) {
    fromEvent(elem, 'scroll')
      .pipe(
        throttleTime(40, asyncScheduler, { leading: true, trailing: true }),
        pluck('target'),
        switchMap((target: Element) =>
          this.elementInScroll$.pipe(
            map(currentElem => ({ currentElem, target })),
            take(1)
          )
        ),
        filter(
          obj => obj.currentElem === obj.target || obj.currentElem === null
        ),
        tap(obj => this.elementInScroll$.next(obj.target)),
        map(obj => ({ elem: obj.target, top: obj.target.scrollTop }))
      )
      .subscribe(evt => {
        this.syncScroll(evt.elem, evt.top);
        this.logger.log(
          `${evt.elem.classList} scrolling at ${evt.top}`,
          'info'
        );
      });
  }

  syncScroll(elem, top) {
    this.panelElems.forEach(elemRef => {
      if (elemRef.nativeElement !== elem) {
        elemRef.nativeElement.scrollTop = top;
      }
    });
  }

  ngOnDestroy() {
    this.resetElementInScrollSubscription.unsubscribe();
  }
}
