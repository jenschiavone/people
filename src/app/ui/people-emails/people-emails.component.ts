import { Component, OnInit } from '@angular/core';
import { Person } from '../people/person';
import { PeopleService } from '../people/people.service';

@Component({
  selector: 'app-people-emails',
  templateUrl: './people-emails.component.html'
})
export class PeopleEmailsComponent implements OnInit {

  people: Person[];
  occurrences: object;

  getEmailCharacterCounts(people) {
    this.occurrences = this.peopleService.getEmailCharacterCounts(people);
  }

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.getPeople().subscribe(people => this.people = people)
  }

}
