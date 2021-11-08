import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Person {
  name: string;
  favorites: Favorite[];
}

interface Favorite {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [],
})
export class DynamicsComponent {
  @ViewChild('myForm') dynamicForm!: NgForm;

  newGame: string = '';

  person: Person = {
    name: 'Franco',
    favorites: [
      {
        id: 1,
        name: 'VALORANT',
      },
      {
        id: 2,
        name: 'NieR Automata',
      },
    ],
  };

  save() {
    console.log('Form posted');
  }

  validateName(): boolean {
    return (
      this.dynamicForm?.controls.name?.invalid &&
      this.dynamicForm?.controls.name?.touched
    );
  }

  add() {
    const newFavorite: Favorite = {
      id: this.person.favorites.length + 1,
      name: this.newGame,
    };
    this.person.favorites.push({ ...newFavorite });
    this.newGame = '';
  }

  delete(id: number) {
    this.person.favorites.splice(id, 1);
  }
}
