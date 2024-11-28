import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'bateaux',
    loadChildren: () => import('./bateaux/bateaux.module').then(m => m.BateauxPageModule)
  },
  {
    path: 'bateaux/:id',
    loadChildren: () =>
      import('./bateau-details/bateau-details.module').then(m => m.BateauDetailsPageModule)
  },
  {
    path: 'restaurants',
    loadChildren: () => import('./restaurants/restaurants.module').then(m => m.RestaurantsPageModule)
  },
  {
    path: 'restaurants/:id',
    loadChildren: () =>
      import('./restaurant-details/restaurant-details.module').then(m => m.RestaurantDetailsPageModule)
  },
  {
    path: 'product-details/:id',
    loadChildren: () =>
      import('./product-details/product-details.module').then(m => m.ProductDetailsPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactPageModule)
  },
  {
    path: 'recettes',
    loadChildren: () => import('./recettes/recettes.module').then( m => m.RecettesPageModule)
  },
  { path: 'recettes/:id', loadChildren: () => import('./recettes-details/recettes-details.module').then(m => m.RecettesDetailsPageModule) },
  {
    path: 'recettes-details',
    loadChildren: () => import('./recettes-details/recettes-details.module').then( m => m.RecettesDetailsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
