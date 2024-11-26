import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.page.html',
  styleUrls: ['./restaurant-details.page.scss'],
})
export class RestaurantDetailsPage implements OnInit {

  restaurant: any;
  
  constructor(private route: ActivatedRoute, private http:HttpClient) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Récupère l'ID du bateau

    
    this.http.get<any[]>('assets/data/restaurants.json').subscribe((data) => {
      this.restaurant = data.find((b) => b.id === id); // Trouver le bateau correspondant
    });

}
}
