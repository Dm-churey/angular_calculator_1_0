import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { DisplayComponentComponent } from '../display-component/display-component.component';

@Component({
  selector: 'app-calculator-component',
  templateUrl: './calculator-component.component.html',
  styleUrls: ['./calculator-component.component.scss']
})
export class CalculatorComponentComponent {
  expression: string = '';
  displayValue: string = '0';
  firstInput: boolean = true;
  equals: boolean = false;

  @ViewChild(DisplayComponentComponent) displayComponent!: DisplayComponentComponent;

  ChangeText(): void {
    this.displayComponent.changeTextRed('red');
  }

  ChangeTextBlack(): void {
    this.displayComponent.changeTextBlack('black');
  }

  onButtonClick(number: number | string): void {
    if (this.firstInput) {
      if (number === '.') {
        this.firstInput = false;
      } else {
        this.displayValue = '';
        this.firstInput = false;
      }
    }
    if (this.equals === true) {
      if (number === '.') {
        this.equals = false;
      } else{
        this.expression = '';
        this.equals = false;
        this.displayValue = '';
      }

    }
    this.expression += number.toString();
    this.displayValue += number.toString();
  }

  onOperationButtonClick(operator: string): void {
    if (operator === '-' || (this.displayValue !== '0' && !['-', '+', '*', '/'].includes(this.expression.slice(-1)))) {
      if (this.firstInput) {
        this.displayValue = '';
        this.firstInput = false;
      }
      if (this.equals === true) {
        this.equals = false;
      }
      this.expression += operator;
      this.displayValue += operator;
    }
  }

  onEqualsSelected(): void {
    const zero = /\b(\/\b|\/)\s*0\b/;
    if (zero.test(this.expression)) {
      console.error("Ошибка вычисления: деление на ноль");
      this.displayValue = '0';
      //this.equals = true;
      this.firstInput = true;
      this.expression = '';
      this.ChangeText();
      return;
    }
    try {
      const result = eval(this.expression);
      this.displayValue = result.toString();
      this.equals = true;
      this.expression = this.displayValue;
      if (this.displayValue < '0') {
        this.ChangeText();
      } else {
        this.ChangeTextBlack();
      } 
    } catch (error) {
      console.error("Ошибка вычисления:", error);
      this.displayValue = '0';
      //this.equals = true;
      this.firstInput = true;
      this.expression = '';
    }
  }

  onDelClick(): void {
    if (this.displayValue.length === 1) {
      this.displayValue = '0';
      this.firstInput = true;
      this.expression = '';
    } else {
      this.displayValue = this.displayValue.slice(0, -1);
      this.expression = this.displayValue;
    }
  }

  clear(): void {
    this.expression = '';
    this.displayValue = '0';
    this.equals = false;
    this.firstInput = true;
    this.ChangeTextBlack();
  }
}