import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recette-details',
  templateUrl: './recettes-details.page.html',
  styleUrls: ['./recettes-details.page.scss'],
})
export class RecetteDetailsPage implements OnInit {
  recette: any = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.http.get<any[]>('assets/data/recettes.json').subscribe((data) => {
        this.recette = data.find((r) => r.id === +id);
      });
    }
  }
}
