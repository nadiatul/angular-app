import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.scss'],
})
export class Part2Component {
  public diamonds = '';
  public errorMessage = '';
  public numberOfDiamond: any;
  constructor() {}

  onNumberIsChange(value: any){
    this.diamonds = '';
    this.drawDiamond(value.target.value);
  }

  drawDiamond(num: number) {
    if (this.validatation(num)) {
      this.errorMessage = '';
      let initialSpace = '   '; // 3 length
      let numSize = num - 1;
      for (let i = 0; i < numSize; i++) {
        this.createDiamond(num, i, initialSpace);
      }
      for (let i = numSize; i >= 0; i--) {
        this.createDiamond(num, i, initialSpace);
      }
    }
  }

  addSpace(num: number, i: number) {
    let astrk = '';
    const lengthSpace = Math.round(num / 2) - i + 4;
    for (let j = 0; j <= lengthSpace; j++) {
      astrk += ' ';
    }
    return astrk;
  }

  createDiamond(num: number, i: number, initialSpace: string) {
    if (!(i % 2)) {
      let astrk = this.addSpace(num, i);
      for (let j = 0; j <= i; j++) {
        astrk += ' *';
      }
      console.log(initialSpace + astrk);
      this.diamonds += `<br>`+initialSpace + astrk;
    }
  }

  validatation(num: any) {
    let errorMessage = '';
    let isValid = true;
    console.log(num)
    num = parseInt(num);
    console.log(num)
    if (isNaN(num)) {
      errorMessage = 'Error: This input cannot be Not A Number';
      console.log(errorMessage);
      isValid = false;
    }


    if (!(num % 2) && !isNaN(num)) {
      errorMessage = 'Error: This input cannot be even number';
      console.log(errorMessage);
      isValid = false;
    }

    if (num < 0) {
      errorMessage = 'Error: This input cannot be a negative number';
      console.log(errorMessage);
      isValid = false;
    }
    this.errorMessage = errorMessage;
    return isValid;
  }
}
