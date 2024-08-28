import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-subtract-button-component',
  templateUrl: './subtract-button-component.component.html',
  styleUrls: ['./subtract-button-component.component.scss']
})
export class SubtractButtonComponentComponent {
  @Output() subtractClick = new EventEmitter<string>();

  onClick(): void {
    this.subtractClick.emit('-');
  }
}
