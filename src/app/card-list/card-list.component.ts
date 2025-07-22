import { Component } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  cards = [
    { id: 1, title: 'Card 1', description: 'This is card 1' },
    { id: 2, title: 'Card 2', description: 'This is card 2' },
    { id: 3, title: 'Card 3', description: 'This is card 3' }
  ];

  editingIndex: number = -1;
  isEditing: boolean = false;

  addCard() {
    const newCard = {
      id: this.cards.length + 1,
      title: 'New Card',
      description: 'New card description'
    };
    this.cards.push(newCard);
  }

  editCard(index: number) {
    this.editingIndex = index;
    this.isEditing = true;
  }

  saveEdit(updatedCard: any) {
    if (this.editingIndex !== -1) {
      this.cards[this.editingIndex] = updatedCard;
    }
    this.isEditing = false;
  }

  deleteCard(index: number) {
    this.cards.splice(index, 1);
  }
}
