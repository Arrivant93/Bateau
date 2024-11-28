import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.page.html',
  styleUrls: ['./recettes.page.scss'],
})
export class RecettesPage implements OnInit {
  recettes: any[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('assets/data/recettes.json').subscribe((data) => {
      this.recettes = data;
    });
  }

  onRecetteClick(recette: any) {
    this.router.navigate(['/recettes', recette.id]);
  }
}
