import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-bateau-details',
  templateUrl: './bateau-details.page.html',
  styleUrls: ['./bateau-details.page.scss'],
})
export class BateauDetailsPage implements OnInit {

  bateau: any;
  
  
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Récupère l'ID du bateau

    
    this.http.get<any[]>('assets/data/bateaux.json').subscribe((data) => {
      this.bateau = data.find((b) => b.id === id); // Trouver le bateau correspondant
    });
  }

}
