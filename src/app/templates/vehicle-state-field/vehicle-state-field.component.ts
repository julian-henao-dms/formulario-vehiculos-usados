import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { switchMap, takeUntil, pairwise } from 'rxjs/operators';

@Component({
  selector: 'app-vehicle-state-field',
  templateUrl: './vehicle-state-field.component.html',
  styleUrls: ['./vehicle-state-field.component.scss']
})
export class VehicleStateFieldComponent implements AfterViewInit {
  @ViewChild('canvasInv') public canvasRef: ElementRef | undefined;

  @Input() public width: number = 600;
  @Input() public height: number = 650;

  private cx!: CanvasRenderingContext2D | null | undefined;

  cols : number | undefined;

  gridByBreakpoint = {
    xl: 2,
    lg: 2,
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
      });

    }

  ngAfterViewInit(): void {
    const canvasElem: HTMLCanvasElement = this.canvasRef?.nativeElement;
    this.cx = canvasElem.getContext('2d')!;
    canvasElem.width = this.width;
    canvasElem.height = this.height;
    this.drawImage(canvasElem);
  }

  async drawImage(canvas: HTMLCanvasElement) {
    const image: HTMLImageElement = await this.loadImage('./assets/images/EstadoVhCanvas.PNG');
    this.cx?.drawImage(image, 0, 0, canvas.width, canvas.height);
    this.cx?.save();
  }
  async loadImage(src: string): Promise<HTMLImageElement> {
    const image = new Image();
    image.src = src;
    return new Promise(resolve => {
      image.onload = (ev) => {
        resolve(image);
      }
    });
  }
  draw(e: MouseEvent) {
    const canvasElem: HTMLCanvasElement = this.canvasRef?.nativeElement;
    this.cx = canvasElem.getContext('2d')!;
    var rect = canvasElem.getBoundingClientRect();
    var posx = e.clientX - rect.left;
    var posy = e.clientY - rect.top;

    this.cx.beginPath();
    this.cx.arc(posx, posy, 5, 0, 2 * Math.PI);
    this.cx.fill();
  }
  changeColor(color: string) {
    const canvasElem: HTMLCanvasElement = this.canvasRef?.nativeElement;
    this.cx = canvasElem.getContext('2d')!;
    this.cx.fillStyle = color;
  }
  clearCanvas() {
    const canvasElem: HTMLCanvasElement = this.canvasRef?.nativeElement;
    this.drawImage(canvasElem);
  }




}
