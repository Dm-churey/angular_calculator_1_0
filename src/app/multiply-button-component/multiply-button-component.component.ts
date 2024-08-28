import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multiply-button-component',
  templateUrl: './multiply-button-component.component.html',
  styleUrls: ['./multiply-button-component.component.scss']
})
export class MultiplyButtonComponentComponent {
  @Output() multiplyClick = new EventEmitter<string>();

  onClick(): void {
    this.multiplyClick.emit('*');
  }
}
