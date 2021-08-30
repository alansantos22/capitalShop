import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescPlacesComponent } from './desc-places.component';

describe('DescPlacesComponent', () => {
  let component: DescPlacesComponent;
  let fixture: ComponentFixture<DescPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescPlacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
