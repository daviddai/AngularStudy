import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-bouncinglist',
  templateUrl: './bouncinglist.component.html',
  styleUrls: ['./bouncinglist.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      
      transition('void => in', [
        animate(400, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(15px)', offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)', offset: 1.0})
        ]))
      ]),

      transition('in => void', [
        animate(400, keyframes([
          style({opacity: 1, transform: 'translateX(0)', offset: 0}),
          style({opacity: 1, transform: 'translateX(-15px)', offset: 0.3}),
          style({opacity: 0, transform: 'translateX(100%)', offset: 1.0})
        ]))
      ])
    ])
  ]
})
export class BouncinglistComponent implements OnInit, AfterViewInit {

  public items: Item[] = [
    new Item(0, "Item A"),
    new Item(1, "Item B"),
    new Item(2, "Item C")
  ];

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.startComponentAnimation();
  }

  startComponentAnimation() {
    this.animationStart('in', 0);
  }

  animationStart(toState: string, itemIndex: number) {
    if (toState === 'void') {
      this.items[itemIndex].hideElement = true;
    } else if (toState === 'in') {
      this.items[itemIndex].hideElement = false;
    }
  }

  animationDone(event: any, itemIndex: number) {
    if (event.toState === 'in') {
      if (itemIndex < this.items.length - 1) {
        this.animationStart('in', itemIndex + 1);
      } else if (itemIndex == this.items.length - 1) {
        this.animationStart('void', itemIndex);
      }
    } else if (event.toState === 'void') {
        if (itemIndex > 0) {
          this.animationStart('void', itemIndex - 1);
        } else {
          this.animationStart('in', 0);
        }
    }
  }

}
class Item {
  private id: number;
  private name: string;

  constructor(id: number, name: string, public state: string = "in", public hideElement: boolean = true) {
    this.id = id;
    this.name = name;
    this.hideElement = hideElement;
  }
}