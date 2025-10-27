import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'db-add-character',
  imports: [],
  templateUrl: './add-character.html',
})
export class AddCharacter {


  name = signal("");
  power = signal(0);

  newCharacter = output<Character>();


  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      //id: this.characters().length + 1,
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    };

    //this.characters.update((list) => [...list, newCharacter]);
    this.newCharacter.emit(newCharacter);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

}
