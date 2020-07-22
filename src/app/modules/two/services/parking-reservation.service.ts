import { Injectable } from '@angular/core';
import { BackendService } from '../../shared/services/backend.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ParkingReservationService {
  status;
  constructor(private backend: BackendService) {
    this.setMockDBResponses();
  }
  setMockDBResponses() {
    this.backend.setResponse({
      reserveParking: dbHandler,
    });
  }

  reserveParking(filters) {
    this.status = 'inProgress'
    return this.backend.Get('reserveParking', filters).pipe(
      tap(resp => this.status = resp ? "successful" : 'not available')
    );
  }
}



// mock backend responses 
const dbHandler = (filters) => {
  const rnd = Math.round(Math.random());
  return rnd === 1;
};