import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BackendService } from '../../shared/services/backend.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  chosenLang$ = new Subject();
  constructor(private backend: BackendService) {
    this.setMockDBResponses();
  }
  setMockDBResponses() {
    this.backend.setResponse({
      searchLang: dbHandler,
    });
  }

  searchLang(key) {
    return this.backend.Get('searchLang', key);
  }
}







//  mocked backed behavior
export const availableLangs = [
  'java',
  'javascript',
  'Clojure',
  'Lisp',
  'smalltalk',
  'BCP',
  'Python',
  'Rust',
  'R Language',
  'C Language',
  'C++',
];

const dbHandler = (searchKey) => {
  return availableLangs.filter((l) => l.toLowerCase().indexOf(searchKey.toLowerCase()) !== -1);
};
