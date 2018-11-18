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
}