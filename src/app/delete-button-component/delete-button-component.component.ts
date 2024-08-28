import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-button-component',
  templateUrl: './delete-button-component.component.html',
  styleUrls: ['./delete-button-component.component.scss']
})
export class DeleteButtonComponentComponent {
  @Output() deleteLastClick = new EventEmitter<string>();

  onClick(): void {
    this.deleteLastClick.emit('DEL');
  }
}
