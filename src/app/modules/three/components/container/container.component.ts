import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/modules/shared/services/logger.service';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  topics;
  topicDetail;
  constructor(
    private logger: LoggerService,
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.logger.clear();
    this.logger.log('welcome to Exercise three!', 'warn');

    this.route.data.subscribe(res => {
      res.data$.subscribe(data => {
        this.logger.log('Received value: ', 'warn');
        this.logger.log(data, 'warn');
      });
    });
  }

  fetchTopicDetail(topic) {

  }
}
