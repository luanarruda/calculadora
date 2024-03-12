import { Component } from '@angular/core';

@Component({
  selector: 'app-form-calc',
  templateUrl: './form-calc.component.html',
  styleUrl: './form-calc.component.css'
})
export class FormCalcComponent {
  num1: number = 0;
  num2: number = 0;
  resp: number = 0;


  onClickSum(){
    this.resp = this.num1 + this.num2;
  }

  onClickSub(){
    this.resp = this.num1 - this.num2;
  }

  onClickMult(){
    this.resp = this.num1 * this.num2;
  }

  onClickDiv(){
    this.resp = this.num1 / this.num2;
  }

  onClickExp(){
    this.resp = this.num1 ** this.num2
  }

  onClickRad(){
    this.resp = this.num1 ** (1/this.num2)
  }

}
