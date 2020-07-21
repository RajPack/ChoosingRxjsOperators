import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
    selector: 'app-app-console',
    templateUrl: './app-console.component.html',
    styleUrls: ['./app-console.component.scss']
})
export class AppConsoleComponent implements OnInit {
    // tslint:disable-next-line: no-use-before-declare
    currentLogs: Log[] = testLogs;
    constructor() {
        interval(300).subscribe(val => this.addLog(val));
    }
    clearLogs() {
        this.currentLogs = [];
    }
    ngOnInit() {}
    addLog(obj, level = 'info') {
        if (typeof obj === 'object') {
            const text = JSON.stringify(obj, null, 1);
            this.currentLogs.push({ text, level });
        } else {
            this.currentLogs.push({ text: obj, level });
        }
    }
}

interface Log {
    text: string;
    level: 'info' | 'warn' | 'error' | 'debug' | string;
}

const testLogs = [
    { text: 'Log one to many', level: 'info' },
    {
        text:
            'a very long message and that needs to be trimmed or given a wrap for full visibility and understanding for the user',
        level: 'info'
    },
    { text: 'This is a warning message', level: 'warn' },
    { text: 'This is an error message', level: 'error' },
    { text: 'This is a debug message', level: 'debug' }
];
