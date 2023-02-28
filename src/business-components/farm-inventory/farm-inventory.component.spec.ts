import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmInventoryComponent } from './farm-inventory.component';

describe('FarmInventoryComponent', () => {
  let component: FarmInventoryComponent;
  let fixture: ComponentFixture<FarmInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmInventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
