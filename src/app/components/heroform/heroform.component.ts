import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-heroform',
  templateUrl: './heroform.component.html',
  styleUrls: ['./heroform.component.css']
})
export class HeroformComponent implements OnInit {

  heroForm: FormGroup;
  hero: Hero;
  heroPowers: string[];

  constructor() {
    this.hero = new Hero();
    this.heroPowers = HeroPowerService.getHeroPowers();
  }

  ngOnInit() {
    this.heroForm = new FormGroup({
      'name': new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(4)
        //forbiddenNameValidator(/bob/i)
      ]),
      'alterEgo': new FormControl(this.hero.alterEgo),
      'power': new FormControl(this.hero.power, [
        Validators.required
      ])
    })
  }

  onSubmit() {
    console.log(JSON.stringify(this.hero));
    this.heroForm.reset();
    this.clearForm();
  }

  clearForm() {
    this.hero.name = "";
    this.hero.alterEgo = "";
    this.hero.power = "";
  }

  get name() { 
    return this.heroForm.get('name');
  }

  get power() {
    return this.heroForm.get('power');
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