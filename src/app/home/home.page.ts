import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../services/tmdb.service';
import { IonHeader, IonButton, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  filmes: any[] = [];

  constructor(private tmdbService: TmdbService) {}

  ngOnInit() {
    this.tmdbService.getFilmesPopulares().subscribe(
      (res) => {
        this.filmes = res.results;
        console.log(this.filmes);
      },
      (erro) => {
        console.error('Erro ao buscar filmes populares:', erro);
      }
    );
  }

  irParaSerie() {
    console.log('Indo para a página de séries...');
    // Exemplo com roteamento:
    // this.router.navigate(['/serie']);
  }
}
