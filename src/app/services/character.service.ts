import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Character } from '../models/Character';
import { DummyData } from '../models/DummyData';
import { CalculatedStats } from '../models/CalculatedStats';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private dummyData: DummyData) { }

  getCharacter():Observable<Character> {
    return of(this.dummyData.char);    
  }

  calculateStats(character: Character) : CalculatedStats {
    return {
      strength: character.stats.strength + 1,
      charisma: character.stats.charisma + 1,
      constitution: character.stats.constitution + 1,
      dexterity: character.stats.dexterity + 1,
      intelligence: character.stats.intelligence + 1,
      wisdom: character.stats.wisdom + 1,
      passive_wisdom : 10,
      proffeciency_bonus: this.calculateProfficiencyBonus(character.base.level)
    }    
  }

  private calculateProfficiencyBonus(level: number){
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
}
