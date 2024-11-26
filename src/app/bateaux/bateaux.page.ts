import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-bateaux',
  templateUrl: './bateaux.page.html',
  styleUrls: ['./bateaux.page.scss'],
})
export class BateauxPage {
  constructor(private router: Router , private http: HttpClient ){}
  goToDetail(id: number) {
    this.router.navigate(['/bateaux', id]); // Navigue vers la page avec l'ID du bateau
  }

  bateaux: any[] = [];

  

  ngOnInit() {
    
    this.http.get<any[]>('assets/data/bateaux.json').subscribe((data) => {
      this.bateaux = data;
    });
  }
}
