import {Component, OnInit} from '@angular/core';
import {HeroService} from './heroes/hero.service';
import {Hero} from './heroes/hero';

@Component({
    moduleId:module.id,
    selector:'my-dashboard',
    templateUrl:'dashboard.component.html',
    styleUrls:['dashboard.component.css']
})
export class DashboardComponent implements OnInit
{
    heroes:Hero[];
    constructor(private _service:HeroService){

    }
    ngOnInit()
    {
        this._service
            .getHeroes()
            .then(heroes=>this.heroes=heroes.slice(1,5));
    }
}