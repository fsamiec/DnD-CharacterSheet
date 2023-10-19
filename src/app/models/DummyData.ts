import { Character } from './Character';


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
    skills: {
      acrobatics: 0,
      animal_handling: 0,
      arcana: 0,
      athletics: 0,
      deception: 0,
      history: 0,
      insight: 0,
      intimidation: 0,
      investigation: 0,
      medicine: 0,
      nature: 0,
      perception: 0,
      performance: 0,
      persuasion: 0,
      religion: 0,
      sleight_of_hand: 0,
      stealth: 0,
      survival: 0,
      has_advantage: ["sleight_of_hand", "stealth", "deception", "persuasion", "perception"],
      has_double_advantage: ["sleight_of_hand", "deception", ""]
    },
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
