import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioVhUsadosComponent } from './formulario-vh-usados.component';

describe('FormularioVhUsadosComponent', () => {
  let component: FormularioVhUsadosComponent;
  let fixture: ComponentFixture<FormularioVhUsadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioVhUsadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioVhUsadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
