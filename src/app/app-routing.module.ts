import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/map'
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/map/map.module').then(mod => mod.MapModule)
  },
  {
    path: 'inventory',
    loadChildren: () => import('./pages/inventory/inventory.module').then(mod => mod.InventoryModule)   
  },
  {
    path: 'myCity',
    loadChildren: () => import('./pages/my-city/my-city.module').then(mod => mod.MyCityModule)   
  },
  {
    path: 'myFaction',
    loadChildren: () => import('./pages/my-faction/my-faction.module').then(mod => mod.MyFactionModule)   
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }