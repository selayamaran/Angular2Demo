import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroDetailComponent} from './heroes/hero-detail.component';
import {HeroService} from './heroes/hero.service';
import { AppComponent }  from './app.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule, 
    AppRoutingModule,
    ],
  declarations: [ 
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
     ],
  bootstrap:    [ AppComponent ],
  providers:[HeroService]
})
export class AppModule { }
