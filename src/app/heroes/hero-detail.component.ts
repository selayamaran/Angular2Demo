import {Component,Input,OnInit} from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchmap';

import {HeroService} from './hero.service';
import {Hero} from './hero';

@Component({
    moduleId:module.id,
    selector:'hero-detail',
    templateUrl:'hero-detail.component.html',
    styleUrls:['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit
{
    hero:Hero;
    constructor(
        private _service:HeroService,
        private _route:ActivatedRoute,
        private location:Location
    ){}

    ngOnInit(){
        this._route.params
            .switchMap((params:Params)=>this._service.getHero(+params['id']))
            .subscribe(hero=>this.hero=hero);
    }

    goBack(){
        this.location.back();
    }
}