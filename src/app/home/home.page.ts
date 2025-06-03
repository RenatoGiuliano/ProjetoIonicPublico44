import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../services/tmdb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {
  filmes: any[] = [];
  termoBusca: string = '';

  constructor(private tmdbService: TmdbService, private router: Router) {}

  ngOnInit() {
    this.carregarFilmesPopulares();
  }

  carregarFilmesPopulares() {
    this.tmdbService.getFilmesPopulares().subscribe(
      res => this.filmes = res.results,
      erro => console.error('Erro ao buscar filmes populares:', erro)
    );
  }

  buscarFilmes() {
    const termo = this.termoBusca.trim();
    if (termo.length === 0) {
      this.carregarFilmesPopulares(); // Se a busca estiver vazia, mostra populares
      return;
    }

    this.tmdbService.buscarFilmes(termo).subscribe(
      res => this.filmes = res.results,
      erro => console.error('Erro ao buscar filmes:', erro)
    );
  }

  verDetalhesSerie(filme: any) {
    this.router.navigate(['/serie'], {
      state: { dados: filme }
    });
  }
}
