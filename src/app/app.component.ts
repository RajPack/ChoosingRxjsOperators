import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private router: Router) {}
    lessons = [
        { name: 'one', desc: 'test' },
        { name: 'two', desc: '' },
        { name: 'three', desc: '' },
        { name: 'four', desc: '' },
        { name: 'five', desc: '' }
    ];

    navigate(lessonName) {
        this.router.navigate([lessonName]);
    }
}
