import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-divide-button-component',
  templateUrl: './divide-button-component.component.html',
  styleUrls: ['./divide-button-component.component.scss']
})
export class DivideButtonComponentComponent {
  @Output() divideClick = new EventEmitter<string>();

  onClick(): void {
    this.divideClick.emit('/');
  }
}
