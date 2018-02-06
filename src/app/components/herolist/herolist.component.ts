import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Hero } from './hero';

@Component({
  selector: 'app-herolist',
  templateUrl: './herolist.component.html',
  styleUrls: ['./herolist.component.css'],
  animations:[
    trigger('heroState', [
      state('inactive', style({backgroundColor: '#eee', transform: 'scale(1)'})),
      state('active', style({backgroundColor: '#cfd8dc', transform: 'scale(1.1)'})),
      
      transition('active => active', animate('100ms ease-in')),
      
      transition('inactive => active', animate('100ms ease-out')),
      
      transition('void => inactive', [
        style({transform: 'translateX(-100%) scale(1)'}),
        animate(100)
      ]),
      
      transition('inactive => void', [
        animate(100, style({transform: 'translateX(100%) scale(1)'}))
      ]),

      transition('void => active', [
        style({transform: 'translateX(0) scale(0)'}),
        animate(200)
      ]),

      transition('active => void', [
        animate(200, style({transform: 'translateX(0) scale(0)'}))
      ])
    ])
  ]
})
export class HerolistComponent implements OnInit {
  private heroIndex: number = -1;

  constructor() {}

  ngOnInit() {}

  heros: Hero[] = [
    new Hero("Windstorm"),
    new Hero("Bombasto"),
    new Hero("Magneta"),
    new Hero("Tornado")
  ];

  showMoreHeros() {
    if (this.heroIndex < this.heros.length) {
      this.heros[++this.heroIndex].toggleVisibility();
    }
  }

  hideMoreHeros() {
    if (this.heroIndex >= 0) {
      this.heros[this.heroIndex--].toggleVisibility();
    }
  }

}
