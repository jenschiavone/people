import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';

import { Person } from './person';

@Injectable()
export class PeopleService {

  private peopleUrl = environment.peopleApiBaseUrl;

  constructor(private http: Http) {
    this.getPeople
  }

  getPeople(): Observable<Person[]> {
    return this.http.get(this.peopleUrl)
                    .map((response: Response) => <Person[]>response.json())
  }

  getEmailCharacterCounts(people) {
    var occurrences = {};
    const emails = this.getEmailList(people);
    const allChars = (emails.join('').trim()).replace(/\s/g, '').split('');
    const unique = (value, index, self) => {
      return self.indexOf(value) === index;
    }
    const uniqueChars = allChars.filter(unique);

    for (let char of allChars) {
      for (let uniqueChar of uniqueChars) {
        if (uniqueChar === char) {
          if (!occurrences.hasOwnProperty(uniqueChar)) {
            occurrences[uniqueChar] = 1;
          } else {
            occurrences[uniqueChar] = occurrences[uniqueChar] + 1;
          }         
        } 
      }
    }
    return occurrences;
  }

  isPossibleDupe(string1: string, string2: string) {
    var string1Length = string1.length;
    var string2Length = string2.length;

    if (string1 === string2) {
      return true;
    } else if (Math.abs(string1Length - string2Length) > 1) {
      return false;
    }

    var i = 0;
    var j = 0;
    var difference = 0;

    while (i < string1Length && j < string2Length) {
      if (string1[i] != string2[j]) {
        difference++;
        if (string1Length > string2Length) {
          i++;
        } else if (string2Length > string1Length) {
          j++;
        } else if (string1Length === string2Length) {
          i++;
          j++;
        }
      } else {
        i++;
        j++;
        }

      if (difference > 1) {
        return false;
      }
    }
    if (difference === 1 && string1Length != string2Length && (i != string1Length || j != string2Length)) {
      return false;
    }
    return true;
  }

  getPossibleDupes(people) {
    var self = this;
    var possibleDupes = [];
    var counter = people.length - 1;

    people.forEach(function (person, index) {
        for(var i=0; i < counter; i++) {
          var dupes = [];
          index++;
          if (self.isPossibleDupe(person.email_address, (people[index]).email_address)) {
            dupes.push(person, people[index])
          }
          if (dupes.length > 0) {
            possibleDupes.push(dupes)
          }
        }
        counter--;
    });
    return possibleDupes;
  }

  getEmailList(people) {
    let emails = [];
    for (let person of people) {
      emails.push(person.email_address)
    }
    return emails;
  }
}


