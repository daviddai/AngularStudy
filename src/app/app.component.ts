import { Component } from '@angular/core';
import { HighlightDirective } from './directives/highlight.directive'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Frist Angular App';
  color:string = '';
}
