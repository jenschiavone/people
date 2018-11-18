import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people/people.service';
import { Person } from '../people/person';

@Component({
  selector: 'app-people-dupes',
  templateUrl: './people-dupes.component.html'
})
export class PeopleDupesComponent implements OnInit {

  people: Person[];
  possibleDupes: any;

  constructor(private peopleService: PeopleService) { }

  getPossibleDupes(people) {
    // Add some dupes!
    const person1 = this.createPossibleDupe("thaddeus.venture@ventureindustries.com");
    const person2 = this.createPossibleDupe("thadeus.venture@ventureindustries.com");
    const person3 = this.createPossibleDupe("hank.venture@goteamventure.com");
    const person4 = this.createPossibleDupe("hunk.venture@goteamventure.com");
    people.push(person1, person2, person3, person4);
    this.possibleDupes = this.peopleService.getPossibleDupes(people);
  }

  createPossibleDupe(email: string) : Person {
    var person = <Person>{};
    person.email_address = email;
    return person;
  }

  ngOnInit() {
    this.peopleService.getPeople().subscribe(people => this.people = people)
  }
}
