import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroform',
  templateUrl: './heroform.component.html',
  styleUrls: ['./heroform.component.css']
})
export class HeroformComponent implements OnInit {

  hero: Hero;
  heroPowers: string[];

  constructor() {
    this.hero = new Hero();
    this.heroPowers = HeroPowerService.getHeroPowers();
  }

  ngOnInit() {}

  onSubmit() {
    console.log(JSON.stringify(this.hero));
    this.clearForm();
  }

  clearForm() {
    this.hero.name = "";
    this.hero.alterEgo = "";
    this.hero.power = "";
  }

}

class Hero {
  name: string;
  alterEgo: string;
  power: string;
}

class HeroPowerService {

  private static heroPowers: string[] = [
    'Really Smart',
    'Unbelievably Strong',
    'Fast As Light'
  ];

  static getHeroPowers() {
    return HeroPowerService.heroPowers;
  }

}