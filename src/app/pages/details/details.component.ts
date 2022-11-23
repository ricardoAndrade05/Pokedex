import { PokeApiService } from './../../service/poke-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private urlPokemon = "https://pokeapi.co/api/v2/pokemon";
  private urlName = "https://pokeapi.co/api/v2/pokemon-species";

  public pokemon: any;
  public isLoading: boolean = true;
  public apiError: boolean = false;

  constructor(
    private activateRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.getPokemon()
  }

  public getPokemon() {
    const id = this.activateRoute.snapshot.params["id"];
    const pokemon = this.pokeApiService.apiGetPokemon(`${this.urlPokemon}/${id}`)
    const name = this.pokeApiService.apiGetPokemon(`${this.urlName}/${id}`)

    return forkJoin([pokemon, name]).subscribe({
      next: res => {
        this.pokemon = res;
        this.isLoading = true;
      },
      error: erro => {
        this.apiError = true;
      }
    })
  }
}
