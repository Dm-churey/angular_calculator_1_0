import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clear-button-component',
  templateUrl: './clear-button-component.component.html',
  styleUrls: ['./clear-button-component.component.scss']
})
export class ClearButtonComponentComponent {
  @Output() clearClick = new EventEmitter<string>();

  onClick(): void {
    this.clearClick.emit('C');
  }
}
