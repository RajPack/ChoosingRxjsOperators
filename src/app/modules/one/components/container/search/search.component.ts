import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  langField = new FormControl();
  langs$ = new BehaviorSubject(availableLangs);
  constructor() { }

  ngOnInit(): void {
  }

}

export const availableLangs = ['java', 'javascript', 'Clojure', 'Lisp', 'smalltalk', 'BCP', 'Python', 'Rust', 'R Language', 'C Language', 'C++'];