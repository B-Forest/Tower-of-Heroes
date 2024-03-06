import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { HeroesComponent } from "./heroes/heroes.component";
import {MessagesComponent} from "./messages/messages.component";
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      RouterOutlet,
      HeroesComponent,
      MessagesComponent,
      RouterLink,
      HttpClientModule,
    ],
})
export class AppComponent {
  title = 'Tour of Heroes';
}
