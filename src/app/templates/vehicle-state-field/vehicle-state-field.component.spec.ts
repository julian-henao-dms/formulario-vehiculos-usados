import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleStateFieldComponent } from './vehicle-state-field.component';

describe('VehicleStateFieldComponent', () => {
  let component: VehicleStateFieldComponent;
  let fixture: ComponentFixture<VehicleStateFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleStateFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleStateFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
