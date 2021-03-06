import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/modules/shared/services/logger.service';
import { fromEvent, interval } from 'rxjs';
import { buffer } from 'rxjs/operators';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  constructor(private logger: LoggerService) {}

  ngOnInit(): void {
    this.logger.clear();
    this.logger.log('welcome to Exercise two!', 'warn');
  }


}
