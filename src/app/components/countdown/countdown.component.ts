import { Component, OnInit, ViewChild } from '@angular/core';
import { TimerComponent } from '../timer/timer.component';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit, AfterViewInit {

  @ViewChild(TimerComponent)
  private timerComponent: TimerComponent;

  started: boolean;

  constructor() {
    this.started = false;
  }

  ngOnInit() {}

  ngAfterViewInit() {
    // redefine function seconds() to get seconds from timer component
    // when this component is initialised
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  seconds() {
    return 0;
  }

  start() {
    this.timerComponent.start();
    this.started = true;
  }

  stop() {
    this.timerComponent.stop();
    this.started = false;
  }

}