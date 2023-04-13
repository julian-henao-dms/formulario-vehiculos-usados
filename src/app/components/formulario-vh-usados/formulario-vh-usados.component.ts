import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-formulario-vh-usados',
  templateUrl: './formulario-vh-usados.component.html',
  styleUrls: ['./formulario-vh-usados.component.scss']
})
export class FormularioVhUsadosComponent implements OnInit {

  displayedColumns: string[] = ['label', 'vida_llanta', 'marca'];
  dataSource = [
  {label: 'Del. Izq. %', delIzq: '', marca_di: ''},
  {label: 'Del. Der. %', delDer: '', marca_dd: ''},
  {label: 'Tras. Izq. %', trasIzq: '', marca_ti: ''},
  {label: 'Tras. Der. %', trasDer: '', marca_td: ''},
  {label: 'Repuesto', repuesto: '', marca_rep: ''}];

  // Variables para almacenar los valores de los inputs
  // inputValues: any[] = Array.from({ length: 5 }, () => ({vida_llanta: '', marca: ''}));
  inputValues: any[] = [
    {delIzq: '', marca_di: ''},
    {delDer: '', marca_dd: ''},
    {trasIzq: '', marca_ti: ''},
    {trasDer: '', marca_td: ''},
    {repuesto: '', marca_rep: ''}
  ];

  displayedColumnsRines: string[] = ['labelRin', 'rin', 'tapa', 'marcaRin'];
  dataSourceRines = [
  {labelRin: 'Del. Izq. %', rinDelIzq: '', tapaDelIzq:'', marca_di_rin: ''},
  {labelRin: 'Del. Der. %', rinDelDer: '', tapaDelDer:'', marca_dd_rin: ''},
  {labelRin: 'Tras. Izq. %', rinTrasIzq: '', tapaTrasIzq:'', marca_ti_rin: ''},
  {labelRin: 'Tras. Der. %', rinTrasDer: '', tapaTrasDer:'', marca_td_rin: ''},
  {labelRin: 'Repuesto', rinRepuesto: '', tapaRep:'', marca_rep_rin: ''}];


  inputValuesRines: any[] = [
    { rinDelIzq: '', tapaDelIzq:'', marca_di_rin: ''},
    { rinDelDer: '', tapaDelDer:'', marca_dd_rin: ''},
    { rinTrasIzq: '', tapaTrasIzq:'', marca_ti_rin: ''},
    { rinTrasDer: '', tapaTrasDer:'', marca_td_rin: ''},
    { rinRepuesto: '', tapaRep:'', marca_rep_rin: ''}
  ];

  colsAlt : number | undefined;

  gridByBreakpointAlt = {
    xl: 3,
    lg: 3,
    md: 2,
    sm: 1,
    xs: 1
  };
  colsDouble : number | undefined;

  gridByBreakpointDouble = {
    xl: 2,
    lg: 2,
    md: 1,
    sm: 1,
    xs: 1
  };
  cols : number | undefined;

  gridByBreakpoint = {
    xl: 4,
    lg: 4,
    md: 2,
    sm: 1,
    xs: 1
  };
  constructor(
    private breakpointObserver: BreakpointObserver,
    ) {
        this.breakpointObserver.observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ]).subscribe(result => {
        if (result.matches) {
          if (result.breakpoints[Breakpoints.XSmall]) {
            this.cols = this.gridByBreakpoint.xs;
          }
          if (result.breakpoints[Breakpoints.Small]) {
            this.cols = this.gridByBreakpoint.sm;
          }
          if (result.breakpoints[Breakpoints.Medium]) {
            this.cols = this.gridByBreakpoint.md;
          }
          if (result.breakpoints[Breakpoints.Large]) {
            this.cols = this.gridByBreakpoint.lg;
          }
          if (result.breakpoints[Breakpoints.XLarge]) {
            this.cols = this.gridByBreakpoint.xl;
          }
        }
        if (result.matches) {
          if (result.breakpoints[Breakpoints.XSmall]) {
            this.colsAlt = this.gridByBreakpointAlt.xs;
          }
          if (result.breakpoints[Breakpoints.Small]) {
            this.colsAlt = this.gridByBreakpointAlt.sm;
          }
          if (result.breakpoints[Breakpoints.Medium]) {
            this.colsAlt = this.gridByBreakpointAlt.md;
          }
          if (result.breakpoints[Breakpoints.Large]) {
            this.colsAlt = this.gridByBreakpointAlt.lg;
          }
          if (result.breakpoints[Breakpoints.XLarge]) {
            this.colsAlt = this.gridByBreakpointAlt.xl;
          }
        }
        if (result.matches) {
          if (result.breakpoints[Breakpoints.XSmall]) {
            this.colsDouble = this.gridByBreakpointDouble.xs;
          }
          if (result.breakpoints[Breakpoints.Small]) {
            this.colsDouble = this.gridByBreakpointDouble.sm;
          }
          if (result.breakpoints[Breakpoints.Medium]) {
            this.colsDouble = this.gridByBreakpointDouble.md;
          }
          if (result.breakpoints[Breakpoints.Large]) {
            this.colsDouble = this.gridByBreakpointDouble.lg;
          }
          if (result.breakpoints[Breakpoints.XLarge]) {
            this.colsDouble = this.gridByBreakpointDouble.xl;
          }
        }
      });

     }

  ngOnInit(): void {

  }

  public sendForm() {
    console.log(this.inputValues);
  }




}
