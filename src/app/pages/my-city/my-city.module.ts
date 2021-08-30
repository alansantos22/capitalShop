import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCityRoutingModule } from './my-city-routing.module';
import { MyCityComponent } from './my-city.component';



@NgModule({
  declarations: [
    MyCityComponent
  ],
  imports: [
    CommonModule,
    MyCityRoutingModule
  ]
})
export class MyCityModule { }
