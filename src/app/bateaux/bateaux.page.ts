import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bateaux',
  templateUrl: './bateaux.page.html',
  styleUrls: ['./bateaux.page.scss'],
})
export class BateauxPage {
  constructor(private router: Router){}
  goToDetail(id: number) {
    this.router.navigate(['/bateaux', id]); // Navigue vers la page avec l'ID du bateau
  }

  bateaux = [
    {
      id: 1,
      nom: 'Le Sole de Pêche',
      description: 'Une sole fraîche entre 700g et 1.2kg, jamais congelée et disponible en filets ou entiers. Préparée selon la demande du client et toujours emballée sous vide pour garantir une fraîcheur optimale.',
      image: 'assets/img/bateau1.jpg',
    },
    {
      id: 2,
      nom: 'Coquilles Saint-Jacques Normandes',
      description: 'Pêchées de manière durable en Normandie, nos coquilles Saint-Jacques sont un délice pour les amateurs de fruits de mer frais. Disponibles toute l\'année.',
      image: 'assets/img/bateau2.jpg',
    },
    {
      id: 3,
      nom: 'Crustacés Vivants',
      description: 'Nos crustacés vivants sont soigneusement sélectionnés pour leur qualité. Vous pouvez les commander en ligne pour une livraison ultra-rapide.',
      image: 'assets/img/bateau3.jpg',
    },
    {
      id: 4,
      nom: 'Poissons Fumés Artisanaux',
      description: 'Nos poissons fumés sont préparés à la main selon des méthodes artisanales. Une expérience gustative unique, idéale pour les repas de fête.',
      image: 'assets/img/bateau4.jpg',
    },
   
  ];
}
