import { Component, OnInit } from '@angular/core';
import { PlacesMock } from 'src/app/shared/mocks/places/placesMock';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public newPlaces: any = PlacesMock;

  constructor() { }

  ngOnInit(): void {
  }

}
