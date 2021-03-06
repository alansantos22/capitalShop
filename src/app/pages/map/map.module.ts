import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from 'src/app/shared/modais/news/news.component';
import { NextTurnComponent } from 'src/app/shared/modais/next-turn/next-turn.component';
import { BuyOrSellComponent } from 'src/app/shared/modais/buy-or-sell/buy-or-sell.component';
import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { PlacesComponent } from './components/places/places.component';
import { DescPlacesComponent } from 'src/app/shared/modais/desc-places/desc-places.component';



@NgModule({
  declarations: [
    MapComponent,
    NewsComponent,
    NextTurnComponent,
    BuyOrSellComponent,
    PlacesComponent,
    DescPlacesComponent
  ],
  imports: [
    CommonModule,
    MapRoutingModule
  ]
})
export class MapModule { }
