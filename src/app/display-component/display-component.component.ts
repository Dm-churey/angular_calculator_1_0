import { Component, Input, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-display-component',
  templateUrl: './display-component.component.html',
  styleUrls: ['./display-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayComponentComponent  {
  @Input() userInput: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userInput']) {
      console.log('Изменен ввод пользователя:', changes['userInput'].currentValue);;
    }
  }

  changeTextRed(color: string): void {
    const displayElement = document.querySelector('.display') as HTMLElement;
    if (displayElement) {
      displayElement.style.color = color;
    }
  }
  changeTextBlack(color: string): void {
    const displayElement = document.querySelector('.display') as HTMLElement;
    if (displayElement) {
      displayElement.style.color = color;
    }
  }
}
