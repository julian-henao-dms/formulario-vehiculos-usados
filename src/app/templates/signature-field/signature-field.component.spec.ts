import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureFieldComponent } from './signature-field.component';

describe('SignatureFieldComponent', () => {
  let component: SignatureFieldComponent;
  let fixture: ComponentFixture<SignatureFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignatureFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignatureFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
