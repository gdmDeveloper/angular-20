import { effect, Injectable, signal } from '@angular/core';


  const readFromLocalStorage = ():Character[] => {

    const characters = localStorage.getItem("characters");

    return characters ? JSON.parse(characters) : [];

  }

@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  characters = signal<Character[]>(readFromLocalStorage());

  saveToLocalStorage = effect(() => {
    localStorage.setItem("characters", JSON.stringify(this.characters()))
  })


  addCharacter(character:Character) {
    this.characters.update(list => [...list, character])
  }

}
