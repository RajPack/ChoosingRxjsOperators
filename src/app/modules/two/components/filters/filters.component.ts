import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
      formControl: new FormControl(),
      onChange$: new Subject(),
    },
    endDate: {
      formControl: new FormControl(),
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
  
  }
}
