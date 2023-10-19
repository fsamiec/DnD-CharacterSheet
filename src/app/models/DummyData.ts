import { Character } from './Character';
import { Skills } from './enums/Skills';
import { Stats } from './enums/Stats';


export class DummyData {
  char: Character = {
    base: {
      character_name: 'Niptac',
      character_class: 'Schurke',
      background: 'Scharlatan',
      level: 3,
      player_name: 'Frank',
      race: 'Gnom (Felsengnom)',
      max_hit_points: 15,
      current_hit_points: 15,
      hit_dice: 1,
      temporary_hit_points: 0,
    },
    skills: [
      {
        base: Stats.dexterity,
        advantage: 0,
        value: 3,
        name: Skills.acrobatics
      },
      {
        base: Stats.intelligence,
        advantage: 0,
        value: 2,
        name: Skills.arcana
      },
      {
        base: Stats.strength,
        advantage: 0,
        value: -1,
        name: Skills.athletics
      },
      {
        base: Stats.charisma,
        advantage: 0,
        value: 2,
        name: Skills.performance
      },
      {
        base: Stats.charisma,
        advantage: 0,
        value: 2,
        name: Skills.intimidation
      },
      {
        base: Stats.dexterity,
        advantage: 2,
        value: 7,
        name: Skills.sleight_of_hand
      },
      {
        base: Stats.wisdom,
        advantage: 0,
        value: 2,
        name: Skills.history
      },
      {
        base: Stats.wisdom,
        advantage: 0,
        value: 0,
        name: Skills.medicine
      },
      {
        base: Stats.dexterity,
        advantage: 1,
        value: 5,
        name: Skills.stealth
      },
      {
        base: Stats.wisdom,
        advantage: 0,
        value: 0,
        name: Skills.animal_handling
      },
      {
        base: Stats.wisdom,
        advantage: 0,
        value: 0,
        name: Skills.insight
      },
      {
        base: Stats.intelligence,
        advantage: 0,
        value: 2,
        name: Skills.investigation
      },
      {
        base: Stats.intelligence,
        advantage: 0,
        value: 2,
        name: Skills.nature
      },
      {
        base: Stats.intelligence,
        advantage: 0,
        value: 2,
        name: Skills.religion
      },
      {
        base: Stats.charisma,
        advantage: 2,
        value: 6,
        name: Skills.deception
      },
      {
        base: Stats.wisdom,
        advantage: 0,
        value: 0,
        name: Skills.survival
      },
      {
        base: Stats.charisma,
        advantage: 1,
        value: 4,
        name: Skills.persuasion
      },
      {
        base: Stats.wisdom,
        advantage: 1,
        value: 2,
        name: Skills.perception
      },


    ],        
    stats: {      
      strength: 8,
      dexterity: 16,
      constitution: 14,
      intelligence: 14,
      wisdom: 10,
      charisma: 14,
      calculated: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,  
        passive_wisdom: 0,
        proffeciency_bonus: 0
      },
      saving_throws: {
        strength: 0,        
        dexterity: 0,
        constitution: 0,        
        intelligence: 0,        
        wisdom: 0,        
        charisma: 0,        
        advantages: ["dexterity, intelligence"]
      },
    },
  };
}
