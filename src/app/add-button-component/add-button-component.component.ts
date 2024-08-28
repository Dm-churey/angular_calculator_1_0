import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-button-component',
  templateUrl: './add-button-component.component.html',
  styleUrls: ['./add-button-component.component.scss']
})
export class AddButtonComponentComponent {
  @Output() addClick = new EventEmitter<string>();

  onClick(): void {
    this.addClick.emit('+');
  }
}
