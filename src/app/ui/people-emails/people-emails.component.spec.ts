import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleEmailsComponent } from './people-emails.component';

describe('PeopleEmailsComponent', () => {
  let component: PeopleEmailsComponent;
  let fixture: ComponentFixture<PeopleEmailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleEmailsComponent ]
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
