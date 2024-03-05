import { Component } from '@angular/core';

@Component({
  selector: 'app-form-calc',
  templateUrl: './form-calc.component.html',
  styleUrl: './form-calc.component.css'
})
export class FormCalcComponent {
  num1: number = 0;
  num2: number = 0;
  sum: number = 0;
  sub: number = 0;
  mult: number = 0;

  onClickSum(){
    this.sum = this.num1 + this.num2;
  }

  onClickSub(){
    this.sum = this.num1 - this.num2;
  }

  onClickMult(){
    this.sum = this.num1 * this.num2;
  }

}
