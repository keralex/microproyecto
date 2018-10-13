import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../pokemon.service'

@Component({
  selector: 'app-navigationhome',
  templateUrl: './navigationhome.component.html',
  styleUrls: ['./navigationhome.component.css'],
  providers: [PokemonService]
})
export class NavigationhomeComponent implements OnInit {
  public pokemons=[];
  constructor(private pokemonService:PokemonService) { }

  ngOnInit() {
    this.getPokemons;
  }
  getPokemons(): void {
    this.pokemons = this.pokemonService.getpokemons();
  }

}
