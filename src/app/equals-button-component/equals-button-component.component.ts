import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-equals-button-component',
  templateUrl: './equals-button-component.component.html',
  styleUrls: ['./equals-button-component.component.scss']
})
export class EqualsButtonComponentComponent {
  @Output() equalsClick = new EventEmitter<string>();

  onClick(): void {
    this.equalsClick.emit('=');
  }
}
