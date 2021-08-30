import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFactionComponent } from './my-faction.component';
import { MyFactionRoutingModule } from './my-faction-routing.module';



@NgModule({
  declarations: [
    MyFactionComponent
  ],
  imports: [
    CommonModule,
    MyFactionRoutingModule
  ]
})
export class MyFactionModule { }
