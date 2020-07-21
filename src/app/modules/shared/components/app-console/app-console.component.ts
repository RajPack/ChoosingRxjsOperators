import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { LoggerService } from '../../services/logger.service';

@Component({
    selector: 'app-app-console',
    templateUrl: './app-console.component.html',
    styleUrls: ['./app-console.component.scss']
})
export class AppConsoleComponent {
    currentLogs: Log[] = [];
    constructor(private logger: LoggerService) {
       this.logger.logs$.subscribe(item => this.addLog(item.text, item.level));
       this.logger.clearSignal$.subscribe(() => this.clearLogs());
    }

    clearLogs() {
        this.currentLogs = [];
    }

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
