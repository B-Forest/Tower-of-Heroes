import { Component } from '@angular/core';
import {HeroService} from "../hero.service";
import {CommonModule} from "@angular/common";
import {Hero} from "../heroes";
import {RouterLink} from "@angular/router";
import {HeroSearchComponent} from "../hero-search/hero-search.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink,HeroSearchComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

}
