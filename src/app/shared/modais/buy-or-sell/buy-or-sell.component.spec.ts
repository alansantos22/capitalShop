import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyOrSellComponent } from './buy-or-sell.component';

describe('BuyOrSellComponent', () => {
  let component: BuyOrSellComponent;
  let fixture: ComponentFixture<BuyOrSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyOrSellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyOrSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
