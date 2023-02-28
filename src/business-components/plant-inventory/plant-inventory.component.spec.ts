import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantInventoryComponent } from './plant-inventory.component';

describe('PlantInventoryComponent', () => {
  let component: PlantInventoryComponent;
  let fixture: ComponentFixture<PlantInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantInventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
