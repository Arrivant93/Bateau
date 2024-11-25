import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BateauxPage } from './bateaux/bateaux.page';
import { BateauDetailsPage } from './bateau-details/bateau-details.page';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'bateaux',
    loadChildren: () => import('./bateaux/bateaux.module').then( m => m.BateauxPageModule)
  },
  {

    path: 'bateaux',
    component: BateauxPage,
  },
  { path: 'bateaux/:id',
    component: BateauDetailsPage},
  {
    path: 'bateau-details',
    loadChildren: () => import('./bateau-details/bateau-details.module').then( m => m.BateauDetailsPageModule)
  },

    path: 'product-details/:id',
    loadChildren: () => import('./product-details/product-details.module').then(m => m.ProductDetailsPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

