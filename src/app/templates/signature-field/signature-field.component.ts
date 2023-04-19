import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-signature-field',
  templateUrl: './signature-field.component.html',
  styleUrls: ['./signature-field.component.scss']
})
export class SignatureFieldComponent implements OnInit, AfterViewInit {

  private readonly menu: boolean = true;
  @Output() signatureWriteEvent = new EventEmitter<any>();
  @ViewChild('canvasSignatureParentRef', { static: false })
  canvasSignatureParentRef: any;
  @ViewChild('canvasSignatureRef', { static: true }) canvasSignatureRef: any;
  public shareData: any;
  public session: any;
  public customerSignature: any;
  public consultingFirm: any;
  public width!: number;
  public height!: number;
  private signaturePad: SignaturePad | undefined;

  constructor() {}

  // async ngOnInit(): Promise<void> {
  //   const canavasEl = this.canvasSignatureRef.nativeElement;
  //   this.signaturePad = new SignaturePad(canavasEl);
  // }

  // ngAfterViewInit(): void {
  //   this.width = this.canvasSignatureParentRef.nativeElement.offsetWidth;
  //   const canavasEl = this.canvasSignatureRef.nativeElement;
  //   canavasEl.width = this.canvasSignatureParentRef.nativeElement.offsetWidth;
  //   canavasEl.height = 60;
  // }

  // public cleanCanvas(): void {
  //   this.signaturePad?.clear();
  // }

  // public async generateSignature(): Promise<void> {
  //   if (this.signaturePad?.isEmpty()) {
  //     // this.dialogRef.close(null);
  //     return;
  //   }
  //   const dataUrl = this.signaturePad?.toDataURL();
  //   // this.dialogRef.close(dataUrl);
  // }
  async ngOnInit(): Promise<void> {
    const canvasEl = this.canvasSignatureRef.nativeElement;
    this.signaturePad = new SignaturePad(canvasEl);
  }
  ngAfterViewInit(): void {
    this.updateCanvasSize();
    window.addEventListener('resize', () => {
      this.updateCanvasSize();
    });
  }

  updateCanvasSize(): void {
    const canvasEl = this.canvasSignatureRef.nativeElement;
    const parentWidth = this.canvasSignatureParentRef.nativeElement.offsetWidth;
    const fixedHeight = 60; // Fixed height in pixels
    canvasEl.width = parentWidth;
    canvasEl.height = fixedHeight;
  }

  public cleanCanvas(): void {
    this.signaturePad?.clear();
  }

  public async generateSignature(): Promise<void> {
    if (this.signaturePad?.isEmpty()) {
      return;
    }
    const dataUrl = this.signaturePad?.toDataURL();
  }
  // @ViewChild('canvas') public canvas: ElementRef | undefined;

  // // setting a width and height for the canvas
  // @Input() public width : number = 250;
  // @Input() public height : number = 55;

  // private cx!: CanvasRenderingContext2D | null | undefined;

  // public ngAfterViewInit() {
  //   // get the context
  //   const canvasEl: HTMLCanvasElement = this.canvas?.nativeElement;
  //   this.cx = canvasEl.getContext('2d')!;

  //   // set the width and height
  //   canvasEl.width = this.width;
  //   canvasEl.height = this.height;

  //   // set some default properties about the line
  //   this.cx.save();
  //   this.cx.lineWidth = 3;
  //   this.cx.lineCap = 'round';
  //   this.cx.strokeStyle = '#000';

  //   // we'll implement this method to start capturing mouse events
  //   this.captureEvents(canvasEl);
  // }

  // private captureEvents(canvasEl: HTMLCanvasElement) {
  //   fromEvent(canvasEl, 'mousedown')
  //     .pipe(
  //       switchMap(e => {
  //         // after a mouse down, we'll record all mouse moves
  //         return fromEvent(canvasEl, 'mousemove')
  //           .pipe(
  //             // we'll stop (and unsubscribe) once the user releases the mouse
  //             // this will trigger a 'mouseup' event
  //             takeUntil(fromEvent(canvasEl, 'mouseup')),
  //             // we'll also stop (and unsubscribe) once the mouse leaves the canvas (mouseleave event)
  //             takeUntil(fromEvent(canvasEl, 'mouseleave')),
  //             // pairwise lets us get the previous value to draw a line from
  //             // the previous point to the current point
  //             pairwise()
  //           )
  //       })
  //     )
  //     .subscribe((res) => {
  //       const rect = canvasEl.getBoundingClientRect();
  //       const prevMouseEvent = res[0] as MouseEvent;
  //       const currMouseEvent = res[1] as MouseEvent;

  //       // previous and current position with the offset
  //       const prevPos = {
  //         x: prevMouseEvent.clientX - rect.left,
  //         y: prevMouseEvent.clientY - rect.top
  //       };

  //       const currentPos = {
  //         x: currMouseEvent.clientX - rect.left,
  //         y: currMouseEvent.clientY - rect.top
  //       };

  //       // this method we'll implement soon to do the actual drawing
  //       this.drawOnCanvas(prevPos, currentPos);
  //     });
  // }

  // private drawOnCanvas(
  //   prevPos: { x: number, y: number },
  //   currentPos: { x: number, y: number }
  // ) {
  //   // incase the context is not set
  //   if (!this.cx) { return; }

  //   // start our drawing path
  //   this.cx.beginPath();

  //   // we're drawing lines so we need a previous position
  //   if (prevPos) {
  //     // sets the start point
  //     this.cx.moveTo(prevPos.x, prevPos.y); // from

  //     // draws a line from the start pos until the current position
  //     this.cx.lineTo(currentPos.x, currentPos.y);

  //     // strokes the current path with the styles we set earlier
  //     this.cx.stroke();
  //   }
  // }

  // emptyField() {
  //   this.cx?.clearRect(0, 0, this.width, this.height);
  // }

  // saveSignature(): string {
  //   const canvasEl: HTMLCanvasElement = this.canvas?.nativeElement;
  //   var dataURL = canvasEl.toDataURL("image/png");
  //   return dataURL;
  // }
}
