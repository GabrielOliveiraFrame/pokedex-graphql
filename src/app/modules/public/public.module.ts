import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';


@NgModule({
  declarations: [PokemonsListComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
  ]
})
export class PublicModule { }
