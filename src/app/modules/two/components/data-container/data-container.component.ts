import { Component, OnInit } from '@angular/core';
import { ParkingReservationService } from '../../services/parking-reservation.service';

@Component({
  selector: 'app-data-container',
  templateUrl: './data-container.component.html',
  styleUrls: ['./data-container.component.scss']
})
export class DataContainerComponent implements OnInit {

  constructor( public reservationService: ParkingReservationService) { }

  ngOnInit(): void {
  }

}
