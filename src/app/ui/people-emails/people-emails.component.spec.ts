import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleEmailsComponent } from './people-emails.component';
import { PeopleService } from '../people/people.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {HttpModule} from '@angular/http';

describe('PeopleEmailsComponent', () => {
  let component: PeopleEmailsComponent;
  let fixture: ComponentFixture<PeopleEmailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [ PeopleEmailsComponent ],
      providers: [ PeopleService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleEmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
