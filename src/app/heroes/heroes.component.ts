import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { hero } from '../interfaces/hero';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero:hero[] = []
  selectedHero ?: hero
  
  constructor( 
    private heroService : HeroService,
    private messageService : MessageService 
    ) {
    
    }

  onSelect(hero: hero):void {
    this.selectedHero = hero
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  }

  getHeros(): void {
    this.heroService.getHeros()
      .subscribe(heroes => {
        this.hero = heroes;
      })
  }

  ngOnInit(): void {
    this.getHeros()
  };
    
  }

