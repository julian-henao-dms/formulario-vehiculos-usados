import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { VhUsados } from './interfaces/vh-usados';
import { ApiService } from 'src/app/services/api.service';
import { MessagesService } from 'src/app/services/messages.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-formulario-vh-usados',
  templateUrl: './formulario-vh-usados.component.html',
  styleUrls: ['./formulario-vh-usados.component.scss']
})
export class FormularioVhUsadosComponent implements OnInit {
  public id_usu: string | null = '';
  public id_lote: string | null = '';
  public headlightSpecString: string | null = '';

  public dataVh: VhUsados = {
    id: 0,
    idlote : 0,
    usu : 0,
    consignacion : '',
    retoma : '',
    otros : '',
    placa : '',
    interno : '',
    asesor : '',
    sala : '',
    fecha : new Date,
    hora : '08:00',
    marca : '',
    referencia : '',
    modelo : '',
    combustible : false,
    km : '',
    transmision : false,
    color : '',
    cilindraje : '',
    traccion : false,
    cojineria : false,
    linea : '',
    porcllantadelizq : 0,
    porcllantadelder : 0,
    porcllantatraizq : 0,
    porcllantatrader : 0,
    marcallantadelizq : '',
    marcallantadelder : '',
    marcallantatraizq : '',
    marcallantatrader : '',
    porcrep : 0,
    marcarep : '',
    porcrindelizq : 0,
    porcrindelder : 0,
    porcrintraizq : 0,
    porcrintrader : 0,
    taparindelizq : '',
    taparindelder : '',
    taparintraizq : '',
    taparintrader : '',
    marcarindelizq : '',
    marcarindelder : '',
    marcarintraizq : '',
    marcarintrader : '',
    porcrinrep : 0,
    taparinrep : '',
    marcarinrep : '',
    matricula : false,
    soat : false,
    rtm : false,
    notas : '',
    incllave : false,
    increpllave : false,
    incmanual : false,
    incencendedor : false,
    inccruceta : false,
    incllave_tipo1 : false,
    incllave_tipo2 : false,
    incgato : false,
    inckith : false,
    incantena : false,
    incmaletero : false,
    nivelcombustible : '',
    incbateria : false,
    incradio : false,
    notasdoc : '',
    clientrega : '',
    fechaentrada : new Date,
    clirecibe : '',
    fechasalida : new Date
  }

  levels = [
    { id: '1', label: 'Nivel 0' },
    { id: '2', label: 'Nivel 1' },
    { id: '3', label: 'Nivel 2' },
    { id: '4', label: 'Nivel 3' },
    { id: '5', label: 'Nivel 4' },
  ];

  image = '/assets/meter/meter1.svg';

  displayedColumns: string[] = ['label', 'vida_llanta', 'marca'];
  dataSource = [
  {label: 'Del. Izq. %', delIzq: '', marca_di: ''},
  {label: 'Del. Der. %', delDer: '', marca_dd: ''},
  {label: 'Tras. Izq. %', trasIzq: '', marca_ti: ''},
  {label: 'Tras. Der. %', trasDer: '', marca_td: ''},
  {label: 'Repuesto', repuesto: '', marca_rep: ''}];


  inputValuesLlantas: any[] = [
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
  colsTrp : number | undefined;

  gridByBreakpointTrp = {
    xl: 3,
    lg: 3,
    md: 3,
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

  public expresiones = {
    numbersText: /^[A-Za-z0-9_-]{1,20}$/,
    numbersTextSpaces: /^[a-zA-Z0-9\s]*$/,
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    textSpacesAccent: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    // correo: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
    correo: /^\w+([.-_+]?\w+)@\w+([.-]?\w+)(\.\w{2,10})+$/,
    // correo: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    nums: /^\d{7,15}$/, // 7 a 14 numeros.
    numsPorc: /^(100|[1-9]?[0-9])$/, // 7 a 14 numeros.

    celular: /^\d{10,15}$/, // 7 a 14 numeros.
  };

  constructor(
    private breakpointObserver: BreakpointObserver,
    private readonly apiService: ApiService,
    private readonly route: ActivatedRoute,
    private router: Router,
    private readonly messageService: MessagesService,
    private _storaged: SessionStorageService,
    private authService: AuthService,

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
        if (result.matches) {
          if (result.breakpoints[Breakpoints.XSmall]) {
            this.colsTrp = this.gridByBreakpointTrp.xs;
          }
          if (result.breakpoints[Breakpoints.Small]) {
            this.colsTrp = this.gridByBreakpointTrp.sm;
          }
          if (result.breakpoints[Breakpoints.Medium]) {
            this.colsTrp = this.gridByBreakpointTrp.md;
          }
          if (result.breakpoints[Breakpoints.Large]) {
            this.colsTrp = this.gridByBreakpointTrp.lg;
          }
          if (result.breakpoints[Breakpoints.XLarge]) {
            this.colsTrp = this.gridByBreakpointTrp.xl;
          }
        }
      });

     }

     async ngOnInit():  Promise<void> {

       this.route.paramMap.subscribe(async params => {
        this.id_usu = params.get('id_usu');
        this.id_lote = params.get('id_lote');
        this.headlightSpecString = params.get('headlightSpecString');

        this._storaged.set('idUsu', this.id_usu);
        this._storaged.set('idLote', this.id_lote);


        if(this.headlightSpecString){


          this.authService.authenticate(this.headlightSpecString).subscribe({
            next: data => {

              this.authService.setToken(data.token)
            },
            error: error => {
              console.error('Error:', error);
              this.router.navigate(['/home-vehiculo-usado']);
            }
          });

        }



        if (this.id_usu === null || this.id_lote === null) {

          this.router.navigate(['/home-vehiculo-usado']);
          return;
        }




    });



  }


  public async sendForm(): Promise<void> {
    this.dataVh.usu = parseInt(this._storaged.get('idUsu'));
    this.dataVh.idlote = parseInt(this._storaged.get('idLote'));
    this.dataVh.combustible = this.dataVh.combustible === 1 ? true : false;
    this.dataVh.transmision = this.dataVh.transmision === 1 ? true : false;
    this.dataVh.traccion = this.dataVh.traccion === 1 ? true : false;
    this.dataVh.cojineria = this.dataVh.cojineria === 1 ? true : false;
    if (this.dataVh.hora.split(":").length == 2) {
      this.dataVh.hora = this.dataVh.hora + ":00";
    }
    this.dataVh.matricula = this.dataVh.matricula === 1 ? true : false;
    this.dataVh.soat = this.dataVh.soat === 1 ? true : false;
    this.dataVh.rtm = this.dataVh.rtm === 1 ? true : false;
    this.dataVh.incllave = this.dataVh.incllave === 1 ? true : false;
    this.dataVh.increpllave = this.dataVh.increpllave === 1 ? true : false;
    this.dataVh.incmanual = this.dataVh.incmanual === 1 ? true : false;
    this.dataVh.incencendedor = this.dataVh.incencendedor === 1 ? true : false;
    this.dataVh.inccruceta = this.dataVh.inccruceta === 1 ? true : false;
    this.dataVh.incllave_tipo1 = this.dataVh.incllave_tipo1 === 1 ? true : false;
    this.dataVh.incllave_tipo2 = this.dataVh.incllave_tipo2 === 1 ? true : false;
    this.dataVh.incgato = this.dataVh.incgato === 1 ? true : false;
    this.dataVh.inckith = this.dataVh.inckith === 1 ? true : false;
    this.dataVh.incantena = this.dataVh.incantena === 1 ? true : false;
    this.dataVh.incmaletero = this.dataVh.incmaletero === 1 ? true : false;
    this.dataVh.incbateria = this.dataVh.incbateria === 1 ? true : false;
    this.dataVh.incradio = this.dataVh.incradio === 1 ? true : false;
    this.dataVh.nivelcombustible = this.dataVh.nivelcombustible.toString() ;
    this.dataVh.linea = this.dataVh.linea.toString() ;



    const res = await this.updateInformation(
      '/VehiculosUsados/guardarvehiculo',
      this.dataVh
    );
    if (res == false) {
      this.messageService.error(
        'Error',
        'No se pudo almacenar la información del vehículo'
      );
      this.messageService.info(
        'Atención',
        'Revise que todos los campos requeridos o contacte con un administrador '
      );
    } else {
      this.messageService.success(
        'Vehículo Guardado',
        'Los datos del vehículo se han enviado correctamente'
      );
      this._storaged.clear();
      this.router.navigate(['/']);
    }

  }


  private async getAnyInformation(service: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.apiService.getInformacion(service).subscribe({
        next: (v) => resolve(v),
        error: (e) => {
          console.info(e);
          resolve(null);
        },
      });
    });
  }


  private async updateInformation(
    service: string,
    document: any
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      this.apiService.updateInformacion(service, document).subscribe({
        next: (v) => resolve(v),
        error: (e) => {
          console.info(e);
          resolve(0);
        },
      });
    });
  }

onSelectedImage(data: string): void{
  this.image = parseInt(data) > 0 ? `/assets/meter/meter${parseInt(data)}.svg` : '/assets/meter/meter1.svg';

}

mapLineaApiToRadioGroupValue(apiValue: string): any {
  if (!apiValue) {
    return '0';
  }
  if (apiValue === '0' || apiValue === '1' || apiValue === '2') {
    return parseInt(apiValue);
  }
  return '0';
}



isValidDate(date: string): boolean {
  const parsedDate = new Date(date);
  const invalidDate = new Date('0001-01-01T00:00:00');
  return !(parsedDate.getTime() === invalidDate.getTime());
}

}
