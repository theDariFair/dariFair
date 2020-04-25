import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {AboutUsComponent} from './views/about-us/about-us.component';
import {FoodMenuComponent} from './views/food-menu/food-menu.component';
import {DessertMenuComponent} from './views/dessert-menu/dessert-menu.component';
import { SsMenuComponent} from './views/ss-menu/ss-menu.component';
import {ContactUsComponent} from './views/contact-us/contact-us.component';
import { BurgersComponent } from './components/burgers/burgers.component';
import { SandwichesComponent } from './components/sandwiches/sandwiches.component';
import { FingerFoodsComponent } from './components/finger-foods/finger-foods.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { SidesComponent } from './components/sides/sides.component';
import { IceCreamComponent } from './components/ice-cream/ice-cream.component';
import { RazzlesComponent } from './components/razzles/razzles.component';
import { SpecialTreatsComponent } from './components/special-treats/special-treats.component';
import { SlushFreezeComponent } from './components/slush-freeze/slush-freeze.component';
import { SmoothiesComponent } from './components/smoothies/smoothies.component';
import { FrappesComponent } from './components/frappes/frappes.component';
import { FloatesShakesComponent } from './components/floates-shakes/floates-shakes.component';
import { MiscDrinksComponent } from './components/misc-drinks/misc-drinks.component';
import { NoveltiesComponent } from './components/novelties/novelties.component';
import { DogTreatComponent } from './components/dog-treat/dog-treat.component';
import { SsFlavorsComponent } from './components/ss-flavors/ss-flavors.component';
import { SpecialMessagesComponent } from './views/home/special-messages/special-messages.component';
import { InfernoComponent} from './components/inferno/inferno.component';


const routes: Routes = [
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path: 'home', component: HomeComponent},
{path: 'aboutUs', component: AboutUsComponent},
{path: 'foodMenu', component: FoodMenuComponent},
{path: 'dessertMenu', component: DessertMenuComponent},
{path: 'ssMenu', component: SsMenuComponent},
{path: 'contactUs', component: ContactUsComponent}
];

@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    FoodMenuComponent,
    DessertMenuComponent,
    SsFlavorsComponent,
    SsMenuComponent,
    BurgersComponent,
    SandwichesComponent,
    FingerFoodsComponent,
    DogTreatComponent,
    DogsComponent,
    SidesComponent,
    IceCreamComponent,
    RazzlesComponent,
    SpecialTreatsComponent,
    SlushFreezeComponent,
    SmoothiesComponent,
    FrappesComponent,
    FloatesShakesComponent,
    MiscDrinksComponent,
    NoveltiesComponent,
    SsFlavorsComponent,
    SpecialMessagesComponent,
    InfernoComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
