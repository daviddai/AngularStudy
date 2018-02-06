import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  intervalId: number;
  @Input() seconds: number;

  constructor() {
    this.intervalId = 0;
  }

  ngOnInit() {}

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(
      () => {
        this.seconds -= 1;
        if (this.seconds == 0) {
          this.clearTimer();
        }
      }, 1000
    );
  }

  start() {
    this.countDown();
  }

  stop() {
    this.clearTimer();
  }

  private clearTimer() {
    clearInterval(this.intervalId);
  }
}
