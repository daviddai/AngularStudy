import { Component, OnInit } from '@angular/core';

import { MissionService } from '../../services/mission.service';

@Component({
  selector: 'app-missioncontrol',
  templateUrl: './missioncontrol.component.html',
  styleUrls: ['./missioncontrol.component.css'],
  providers: [MissionService]
})
export class MissioncontrolComponent implements OnInit {

  astronauts = ['Lovell', 'Swigert', 'Haise'];
  history: string[] = [];
  missions = [
    'Fly to moon!',
    'Fly to mars!',
    'Fly to vegas!'
  ];
  nextMission = 0;

  constructor(private missionService: MissionService) {
    missionService.missionConfirmed$.subscribe(
      astronaut => {
        this.history.push(`${astronaut} confirmed the mission`);
      }
    );
  }

  ngOnInit() {}

  announce() {
    let mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission \"${mission}\" is announced`);
    if (this.nextMission >= this.missions.length) {
      this.nextMission = 0;
    }
  }

}
