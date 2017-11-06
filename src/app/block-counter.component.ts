import { Component } from '@angular/core';

@Component({
  selector: 'app-block-counter',
  template: `
    <button (click)="updateCount(-1)" [disabled]="!count"> -</button>
    <button (click)="updateCount()"> +</button>
    <span [innerHTML]="blocks" class="blocks"></span>
    {{count || 'none'}}`,
  styles: ['.blocks {color: PaleGreen;}']
})
export class BlockCounterComponent {

  count = 4;

  updateCount(adjustment = 1) {
    this.count += adjustment;
  }

  get blocks() {
    return '&#9609;'.repeat(this.count);
  }
}
