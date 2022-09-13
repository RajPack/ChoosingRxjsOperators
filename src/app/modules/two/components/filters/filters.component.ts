import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { Subject, combineLatest, zip } from 'rxjs';
import { LoggerService } from 'src/app/modules/shared/services/logger.service';
import { ParkingReservationService } from '../../services/parking-reservation.service';
import { map, tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  filters = {
    vehicleType: {
      options: ['Four Wheeler', 'Two Wheeler', 'Bi-cycle'],
      onChange$: new Subject(),
    },
    startDate: {
      formControl: new UntypedFormControl(),
      onChange$: new Subject(),
    },
    endDate: {
      formControl: new UntypedFormControl(),
      onChange$: new Subject(),
    },
  };

  constructor(
    private logger: LoggerService,
    private reservationService: ParkingReservationService
  ) {}

  ngOnInit(): void {
    this.reservationService.status = undefined;
    this.listenToFilters();
  }

  listenToFilters() {
    const vehicleType$ = this.filters.vehicleType.onChange$.pipe();
    const startDate$ = this.filters.startDate.onChange$.pipe(
      map((d: Date) => d.toISOString())
    );
    const endDate$ = this.filters.endDate.onChange$.pipe(
      map((d: Date) => d.toISOString())
    );

    combineLatest(vehicleType$, startDate$, endDate$)
      .pipe(
        map((dataArr) => ({
          type: dataArr[0],
          start: dataArr[1],
          end: dataArr[2],
        })),
        tap(val => {
          this.logger.log("Calling backend with filters:", 'info');
          this.logger.log(val, 'info');
        }),
        switchMap(filters => this.reservationService.reserveParking(filters)),
        tap(resp => {
          this.logger.log("Received from backend:", 'warn');
          this.logger.log(resp, 'warn');
        })
      )
      .subscribe();
  }
}
