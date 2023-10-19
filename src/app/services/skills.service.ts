import { Injectable } from '@angular/core';
import { Skills } from '../models/enums/Skills';
import { Character } from '../models/Character';
import { Stats } from '../models/enums/Stats';
import { Classes } from '../models/enums/Classes';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  public calculateSkillValue(character: Character) : void {
    character.skills.forEach(skill => {      
      var value = 0;

      switch (skill.attribute) {
        case Stats.charisma: 
          value = character.stats.calculated.charisma;
          break;
        case Stats.constitution: 
          value = character.stats.calculated.constitution;
          break;
        case Stats.dexterity: 
          value = character.stats.calculated.dexterity;
          break;
        case Stats.intelligence: 
          value = character.stats.calculated.intelligence;
          break;
        case Stats.strength: 
          value = character.stats.calculated.strength;
          break;
        case Stats.wisdom: 
          value = character.stats.calculated.wisdom;
          break;
      }
      
      skill.value = value + character.stats.calculated.proficiency_bonus * skill.proficiency;

      //bardern super sonder behandlung, die wir niemals brauchen werden.
      if (character.base.character_class === Classes.Bard && skill.proficiency == 0 && character.base.level > 1) {
        skill.value += Math.floor(character.stats.calculated.proficiency_bonus / 2);
      }
    });    
  }
}
