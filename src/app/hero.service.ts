import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { HEROES } from './mock-heros';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((h) => (h.id = id))!;
    this.messageService.add(`We grabbed hero with id of ${id}`);
    return of(hero);
  }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('The HeroService fetched the Heros');
    return heroes;
  }
}
