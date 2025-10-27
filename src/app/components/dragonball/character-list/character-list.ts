import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'db-character-list',
  imports: [],
  templateUrl: './character-list.html',
})
export class CharacterList {


  listName = input.required()
  characters = input.required<Character[]>()

}
