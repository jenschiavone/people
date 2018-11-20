import { Component, OnInit } from '@angular/core';
import { Person } from '../people/person';
import { PeopleService } from '../people/people.service';
import { CharacterOccurrence } from './character-occurrence';

@Component({
  selector: 'app-people-emails',
  templateUrl: './people-emails.component.html'
})
export class PeopleEmailsComponent implements OnInit {

  people: Person[];
  occurrences:  CharacterOccurrence[];

  constructor(private peopleService: PeopleService) { }

  getEmailCharacterCounts(people) {
    this.occurrences = this.peopleService.getEmailCharacterCounts(people);
  }

  ngOnInit() {
    this.peopleService.getPeople().subscribe(people => this.people = people)
  }

}
