import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFactionComponent } from './my-faction.component';

describe('MyFactionComponent', () => {
  let component: MyFactionComponent;
  let fixture: ComponentFixture<MyFactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
