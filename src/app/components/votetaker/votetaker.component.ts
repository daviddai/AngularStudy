import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votetaker',
  templateUrl: './votetaker.component.html',
  styleUrls: ['./votetaker.component.css']
})
export class VotetakerComponent implements OnInit {

  agreed:number;
  disagreed: number;
  voters: string[];

  constructor() {
    this.agreed = 0;
    this.disagreed = 0;
    this.voters = [
      "Allen Iverson", "Kobe Bryant", "Stephen Curry"
    ]
  }

  ngOnInit() {}

  onVote(agreed: boolean) {
    agreed ? ++this.agreed : ++this.disagreed;
  }

}
