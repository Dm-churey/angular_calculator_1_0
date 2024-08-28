import { Component, Output, EventEmitter, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-number-button-component',
  templateUrl: './number-button-component.component.html',
  styleUrls: ['./number-button-component.component.scss']
})
export class NumberButtonComponentComponent {
  @Output() numberSelected = new EventEmitter<number | string>();
  @ContentChild('pointButton') pointButton!: ElementRef;

  ngAfterContentInit() {
    this.pointButton.nativeElement.addEventListener('click', () => {
      this.numberSelected.emit('.');
    })
  }

  onClick(value: number): void {
    this.numberSelected.emit(value);
  }
}
