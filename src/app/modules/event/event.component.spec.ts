import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventComponent } from './event.component';
import {EventListComponent} from "./event-list/event-list.component";

describe('EventComponent', () => {
  let component: EventComponent;
  let componentEventList: EventListComponent;
  let fixture: ComponentFixture<EventComponent>;
  let fixtureEventList: ComponentFixture<EventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EventComponent,
        EventListComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventComponent);
    component = fixture.componentInstance;
    componentEventList = fixtureEventList.componentInstance;
    fixture.detectChanges();
    fixtureEventList.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should return EventListComponent', () =>{
    expect(componentEventList).toBeDefined();
  });
});
