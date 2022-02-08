import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

const POKEMONS = gql`
  query pokemons {
    pokemons {
      results{
        name
        image
      }
    }
  }
  `

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private apollo: Apollo
  ) { }

  getAll(): Observable<any> {
    return this.apollo.watchQuery<any>({query: POKEMONS}).valueChanges;
  }

}
