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
  }
}
