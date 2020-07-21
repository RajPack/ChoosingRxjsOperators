import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(public searchService: SearchService) { }

  ngOnInit(): void {
  }

}
