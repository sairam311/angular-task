import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent {
  @Input() card: any;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();

  // Method to close the modal
  closeModal() {
    this.close.emit();
  }

  // Method to save the card
  saveCard() {
    this.save.emit(this.card);
  }
}
