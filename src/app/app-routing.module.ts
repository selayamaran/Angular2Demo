import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroDetailComponent} from './heroes/hero-detail.component';

const ROUTES:Routes = [
      {path:'heroes',component:HeroesComponent},
      {path:'dashboard',component:DashboardComponent},
      {path:'detail/:id',component:HeroDetailComponent},
      {path:'',redirectTo:'dashboard',pathMatch:'full'}
    ];
@NgModule({
    imports:[
        RouterModule.forRoot(ROUTES)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule
{

}