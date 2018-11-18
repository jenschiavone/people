import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend,
  BaseRequestOptions
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { PeopleService } from './people.service';
import { environment } from '../../../environments/environment';
import { Person } from '../people/person';

describe('PeopleService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PeopleService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions],
        },
        { provide: XHRBackend, useClass: MockBackend }
      ]
      });

    var service = TestBed.get(PeopleService)
  });

  describe('getPeople()', () => {

    it('should return an Observable<Array<Person>>',
        inject([PeopleService, XHRBackend], (service, mockBackend) => {

        const mockResponse = {
          data: [
            { display_name: "Marisa Casper" },
            { display_name: "Griffin Hand" },
            { display_name: "Mikel Reynolds" },
            { display_name: "Deshaun Baumbach" },
            { display_name: "Charlotte Reynolds" }
          ]
        };

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

        service.getPeople().subscribe((people) => {
          expect(people.length).toBe(5);
          expect(people[0].display_name).toEqual("Marisa Casper");
          expect(people[1].display_name).toEqual("Griffin Hand");
          expect(people[2].display_name).toEqual("Mikel Reynolds");
          expect(people[3].display_name).toEqual("Deshaun Baumbach");
          expect(people[4].display_name).toEqual("Charlotte Reynolds");
        });

    }));
  });

  describe('getEmailCharacterCounts()', () => {
    const person1 = { email_address: "jenschiavone@comcast.net" } as Person;
    const person2 = { email_address: "jenschiavone@example.com" } as Person;
    const people = [person1, person2];

    it('should return the correct character count',
        inject([PeopleService], (service) => {

        const occurrences = service.getEmailCharacterCounts((people) => {
          expect(occurrences['j']).toBe(2);
        });

    }));
  });
});



