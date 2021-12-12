import { MessageService } from './../message.service';
import { HeroService } from './../hero.service';
import { HEROES } from './../mock-heros';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelected(hero: Hero): void {
    this.messageService.add(
      `You selected Hero with id of ${hero.id} and name ${hero.name}`
    );
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((x: any) => (this.heroes = x));
  }
}
