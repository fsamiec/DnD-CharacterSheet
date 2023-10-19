import { Injectable } from '@angular/core';
import { Character } from '../models/Character';
import { CalculatedStats } from '../models/CalculatedStats';
import { CharacterSkills } from '../models/CharacterSkills';
import { Skills } from '../models/enums/Skills';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor() { }

  calculateStats(character: Character) : void {    
      character.stats.calculated.strength = this.calculateBonus(character.stats.strength),
      character.stats.calculated.charisma = this.calculateBonus(character.stats.charisma),
      character.stats.calculated.constitution = this.calculateBonus(character.stats.constitution),
      character.stats.calculated.dexterity = this.calculateBonus(character.stats.dexterity),
      character.stats.calculated.intelligence = this.calculateBonus(character.stats.intelligence),
      character.stats.calculated.wisdom = this.calculateBonus(character.stats.wisdom),
      character.stats.calculated.passive_wisdom = this.calculatePassiveWisdom(character.skills),
      character.stats.calculated.proficiency_bonus = this.calculateProficiencyBonus(character.base.level)        
  }

  private calculateBonus(input: number) : number {
    return Math.floor((input - 10) / 2);
  }

  private calculateProficiencyBonus(level: number) : number {
    if (level > 15) {
      return 6;
    }
    if (level > 12) {
      return 5;
    }
    if (level > 8) {      
      return 4;
    }
    if (level > 4) {
      return 3;
    }
    return 2;
  }

  private calculatePassiveWisdom(skills: CharacterSkills[]) : number {
    const perceptionValue = skills.find(x => x.name === Skills.perception)?.value;
    if (perceptionValue) {
      return 10 + perceptionValue;
    }

    return 10;
  }
}
