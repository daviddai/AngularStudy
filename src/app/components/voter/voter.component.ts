import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {

  voted: boolean;
  // @Input indicates value will injected into name from parent component
  @Input() name: string;
  // @Output indicates this event will be handled in parent component
  @Output() onVote = new EventEmitter<boolean>();

  constructor() {
    this.voted = false;
  }

  ngOnInit() {}

  vote(agreed: boolean) {
    this.onVote.emit(agreed);
    this.voted = true;
  }

}
