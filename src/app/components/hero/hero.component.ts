import { Component, OnInit, Input } from '@angular/core';
import { Hero } from './hero';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnChanges {
  newHeroName: string;
  heros: Hero[];
  myHero: Hero;

  constructor() {
    this.heros = [
      new Hero(1, "Windstorm"),
      new Hero(2, "Bombasto"),
      new Hero(3, "Magneta"),
      new Hero(4, "Tornado")
    ];
    this.myHero = this.heros[0];
  }

  ngOnInit() {
    console.log("HereComponent ngOnInit() is called");
  }

  ngOnChanges() {
    console.log("HeroComponent ngOnChanges() is called");
  }

  public addHero() {
    this.heros.push(new Hero(this.heros.length + 1, this.newHeroName));
    this.newHeroName = "";
  }

  public updateMyHero(myHeroId: number) {
    for (let hero of this.heros) {
      if (myHeroId == hero.id) {
        this.myHero = hero;
        break;
      }
    }
  }

}
