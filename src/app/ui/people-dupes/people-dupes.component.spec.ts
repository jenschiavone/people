import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleDupesComponent } from './people-dupes.component';

describe('PeopleDupesComponent', () => {
  let component: PeopleDupesComponent;
  let fixture: ComponentFixture<PeopleDupesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleDupesComponent ]
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
