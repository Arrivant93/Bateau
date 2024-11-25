import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage  {

  constructor(private router: Router){}
  goToDetail(id: number) {
    this.router.navigate(['/restaurants', id]); // Navigue vers la page avec l'ID du bateau
  }
  restaurants = [
    {
      id: 1,
      nom: 'restaurant1',
      description: 'Une sole fraîche entre 700g et 1.2kg, jamais congelée et disponible en filets ou entiers. Préparée selon la demande du client et toujours emballée sous vide pour garantir une fraîcheur optimale.',
      image: 'assets/img/restau1.jpg',
    },
    {
      id: 2,
      nom: 'restaurant2',
      description: 'Pêchées de manière durable en Normandie, nos coquilles Saint-Jacques sont un délice pour les amateurs de fruits de mer frais. Disponibles toute l\'année.',
      image: 'assets/img/restau2.jpg',
    },
    {
      id: 3,
      nom: 'restaurant3',
      description: 'Nos crustacés vivants sont soigneusement sélectionnés pour leur qualité. Vous pouvez les commander en ligne pour une livraison ultra-rapide.',
      image: 'assets/img/restau3.jpg',
    },
    {
      id: 4,
      nom: 'restaurant4',
      description: 'Nos poissons fumés sont préparés à la main selon des méthodes artisanales. Une expérience gustative unique, idéale pour les repas de fête.',
      image: 'assets/img/restau4.jpg',
    },
   
  ];
}
