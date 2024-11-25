import { Component } from '@angular/core';

@Component({
  selector: 'app-bateaux',
  templateUrl: './bateaux.page.html',
  styleUrls: ['./bateaux.page.scss'],
})
export class BateauxPage {
  bateaux = [
    {
      nom: 'Le Sole de Pêche',
      description: 'Une sole fraîche entre 700g et 1.2kg, jamais congelée et disponible en filets ou entiers. Préparée selon la demande du client et toujours emballée sous vide pour garantir une fraîcheur optimale.',
      image: 'assets/img/bateau1.jpg',
    },
    {
      nom: 'Coquilles Saint-Jacques Normandes',
      description: 'Pêchées de manière durable en Normandie, nos coquilles Saint-Jacques sont un délice pour les amateurs de fruits de mer frais. Disponibles toute l\'année.',
      image: 'assets/img/bateau2.jpg',
    },
    {
      nom: 'Crustacés Vivants',
      description: 'Nos crustacés vivants sont soigneusement sélectionnés pour leur qualité. Vous pouvez les commander en ligne pour une livraison ultra-rapide.',
      image: 'assets/img/bateau3.jpg',
    },
    {
      nom: 'Poissons Fumés Artisanaux',
      description: 'Nos poissons fumés sont préparés à la main selon des méthodes artisanales. Une expérience gustative unique, idéale pour les repas de fête.',
      image: 'assets/img/bateau4.jpg',
    },
   
  ];
}
