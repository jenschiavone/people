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
    let emails = [];
    for (let person of people) {
      emails.push(person.email_address);
    }
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
}