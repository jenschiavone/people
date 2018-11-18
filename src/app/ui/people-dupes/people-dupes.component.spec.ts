import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleDupesComponent } from './people-dupes.component';
import { PeopleService } from '../people/people.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {HttpModule} from '@angular/http';

describe('PeopleDupesComponent', () => {
  let component: PeopleDupesComponent;
  let fixture: ComponentFixture<PeopleDupesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [ PeopleDupesComponent ],
      providers: [ PeopleService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleDupesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
