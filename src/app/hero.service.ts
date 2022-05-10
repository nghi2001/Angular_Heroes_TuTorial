import { Injectable } from '@angular/core';
import { hero } from './interfaces/hero';
import { HERO } from './datamock/heros';
import {Observable, of} from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService : MessageService) { }

  getHeros() : Observable<hero[]> {
    
    const heros = of(HERO);
    this.messageService.add('HeroService: fetch heroes')
    return heros
  }
}
