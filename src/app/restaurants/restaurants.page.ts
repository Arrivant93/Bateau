import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage  {
  restaurants: any[]=[];
  constructor(private router: Router, private http:HttpClient){}
  goToDetail(id: number) {
    this.router.navigate(['/restaurants', id]); // Navigue vers la page avec l'ID du bateau
  }
  ngOnInit() {
  
    this.http.get<any[]>('assets/data/restaurants.json').subscribe((data) => {
      this.restaurants = data;
    });
  }
  
}
