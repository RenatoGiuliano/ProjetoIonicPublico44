import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // ✅ Importação corrigida

@Component({
  selector: 'app-serie',
  templateUrl: './serie.page.html',
  styleUrls: ['./serie.page.scss'],
  standalone: false
})
export class SeriePage implements OnInit {
  filme: any;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.filme = nav?.extras?.state?.['dados'];
  }

  ngOnInit() {}
}
