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
    { name: 'one', desc: 'test', active: false },
    { name: 'two', desc: '', active: false },
    { name: 'three', desc: '', active: false },
    { name: 'four', desc: '', active: false },
    { name: 'five', desc: '', active: false },
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
