import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    // let encodedString = encodeURIComponent("f2Hgt/LHPc/4KzoFFE6TPMgQXPrrZ9zLejlDgKtU5Ti8i0RRR3Q8GT1nIVCX8fKnKijrx/6Bt/az56BTNI6JkupqQAv7gMWrhpUoeKp2VdvSPWbYf2//9BmnPQ==");

  }

  cerrar() {
    window.close()
  }

}
