import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {
    this.router.events.subscribe(this.listenToActivatedRoute.bind(this));
  }
  lessons = [
    { name: 'one', desc: 'Search using keywords', active: false },
    { name: 'two', desc: 'Multiple Filters', active: false },
    { name: 'three', desc: 'Pre-loading your data', active: false },
    { name: 'four', desc: 'Handling backend', active: false },
    { name: 'five', desc: 'Watching a DOM event', active: false },
  ];

  navigate(lessonName) {
    this.router.navigate([lessonName]);
  }

  listenToActivatedRoute(event) {
    if (event instanceof NavigationEnd) {
      const url = event.urlAfterRedirects;
      this.lessons.forEach(item => {
        item.active = url.includes(('/'+item.name)) ? true: false;
      });
    }
  }
}
