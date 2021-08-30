import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

import { InventoryModule } from './pages/inventory/inventory.module';
import { MapModule } from './pages/map/map.module';
import { MyCityModule } from './pages/my-city/my-city.module';
import { MyFactionModule } from './pages/my-faction/my-faction.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MapModule,
    InventoryModule,
    MyCityModule,
    MyFactionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
