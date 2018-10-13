import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../pokemon.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PokemonService]
})
export class HomeComponent implements OnInit {

  pokemons : Array<any>;
  constructor(public pokemonService:PokemonService) { }

  ngOnInit() {
    this.pokemons=this.pokemonService.getpokemons();
   }

}
