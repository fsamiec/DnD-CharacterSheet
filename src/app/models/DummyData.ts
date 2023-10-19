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
        attribute: Stats.dexterity,
        proficiency: 0,
        value: 0,
        name: Skills.acrobatics
      },
      {
        attribute: Stats.intelligence,
        proficiency: 0,
        value: 0,
        name: Skills.arcana
      },
      {
        attribute: Stats.strength,
        proficiency: 0,
        value: 0,
        name: Skills.athletics
      },
      {
        attribute: Stats.charisma,
        proficiency: 0,
        value: 2,
        name: Skills.performance
      },
      {
        attribute: Stats.charisma,
        proficiency: 0,
        value: 2,
        name: Skills.intimidation
      },
      {
        attribute: Stats.dexterity,
        proficiency: 2,
        value: 7,
        name: Skills.sleight_of_hand
      },
      {
        attribute: Stats.wisdom,
        proficiency: 0,
        value: 2,
        name: Skills.history
      },
      {
        attribute: Stats.wisdom,
        proficiency: 0,
        value: 0,
        name: Skills.medicine
      },
      {
        attribute: Stats.dexterity,
        proficiency: 1,
        value: 5,
        name: Skills.stealth
      },
      {
        attribute: Stats.wisdom,
        proficiency: 0,
        value: 0,
        name: Skills.animal_handling
      },
      {
        attribute: Stats.wisdom,
        proficiency: 0,
        value: 0,
        name: Skills.insight
      },
      {
        attribute: Stats.intelligence,
        proficiency: 0,
        value: 2,
        name: Skills.investigation
      },
      {
        attribute: Stats.intelligence,
        proficiency: 0,
        value: 2,
        name: Skills.nature
      },
      {
        attribute: Stats.intelligence,
        proficiency: 0,
        value: 2,
        name: Skills.religion
      },
      {
        attribute: Stats.charisma,
        proficiency: 2,
        value: 6,
        name: Skills.deception
      },
      {
        attribute: Stats.wisdom,
        proficiency: 0,
        value: 0,
        name: Skills.survival
      },
      {
        attribute: Stats.charisma,
        proficiency: 1,
        value: 4,
        name: Skills.persuasion
      },
      {
        attribute: Stats.wisdom,
        proficiency: 1,
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
        proficiency_bonus: 0
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
