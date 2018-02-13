import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { VotetakerComponent } from './components/votetaker/votetaker.component';
import { VoterComponent } from './components/voter/voter.component';
import { TimerComponent } from './components/timer/timer.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { MissioncontrolComponent } from './components/missioncontrol/missioncontrol.component';
import { AstronautComponent } from './components/astronaut/astronaut.component';
import { HighlightDirective } from './directives/highlight.directive';
import { HerolistComponent } from './components/herolist/herolist.component';
import { BouncinglistComponent } from './components/bouncinglist/bouncinglist.component';
import { HeroformComponent } from './components/heroform/heroform.component';
import { ForbiddenNameDirective } from './directives/forbidden-name.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    VotetakerComponent,
    VoterComponent,
    TimerComponent,
    CountdownComponent,
    MissioncontrolComponent,
    AstronautComponent,
    HighlightDirective,
    HerolistComponent,
    BouncinglistComponent,
    HeroformComponent,
    ForbiddenNameDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
