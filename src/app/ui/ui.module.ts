import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PeopleComponent } from './people/people.component';
import { PeopleService } from './people/people.service';

import { PeopleRoutingModule } from './people/people-routing.module';
import { PeopleEmailsRoutingModule } from './people-emails/people-emails-routing.module';
import { PeopleEmailsComponent } from './people-emails/people-emails.component';
import { PeopleDupesComponent } from './people-dupes/people-dupes.component';
import { PeopleDupesRoutingModule } from './people-dupes/people-dupes-routing.module';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PeopleComponent,
    PeopleEmailsComponent,
    PeopleDupesComponent
    ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    PeopleEmailsRoutingModule,
    PeopleDupesRoutingModule
  ],
  exports: [
  PeopleComponent,
  HeaderComponent,
  FooterComponent
  ],
  providers: [PeopleService]
})
export class UiModule { }