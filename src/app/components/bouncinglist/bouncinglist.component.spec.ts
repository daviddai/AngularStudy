import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BouncinglistComponent } from './bouncinglist.component';

describe('BouncinglistComponent', () => {
  let component: BouncinglistComponent;
  let fixture: ComponentFixture<BouncinglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BouncinglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BouncinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
