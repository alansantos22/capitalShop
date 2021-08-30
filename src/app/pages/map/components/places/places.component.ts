import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {
  @Input() places: any;

  constructor() { }

  ngOnInit(): void {
  }

}
