import { Component, OnInit, Input } from '@angular/core';
import { hero } from '../interfaces/hero';

@Component({
  selector: 'app-herodetail',
  templateUrl: './herodetail.component.html',
  styleUrls: ['./herodetail.component.css']
})
export class HerodetailComponent implements OnInit {
  @Input() hero?:hero
  constructor() { }

  ngOnInit(): void {
  }

}
