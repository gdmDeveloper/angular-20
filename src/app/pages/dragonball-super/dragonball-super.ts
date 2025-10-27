import { Component, inject, signal } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { AddCharacter } from '../../components/dragonball/add-character/add-character';
import { DragonballService } from '../../services/dragonball.service';


@Component({
  templateUrl: './dragonball-super.html',
  imports: [CharacterList, AddCharacter],
})
export class DragonballSuper {

  public dragonballService = inject(DragonballService);

  addCharacter(character:Character) {
    this.dragonballService.addCharacter(character)
  }

  characters = this.dragonballService.characters


}
