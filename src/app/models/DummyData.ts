import { Character } from './Character';
import { BaseStatsEnum, CharacterSkillsEnum } from './enums/CharacterRace';


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
        base: BaseStatsEnum.dexterity,
        advantage: 0,
        value: 3,
        name: CharacterSkillsEnum.acrobatics
      },
      {
        base: BaseStatsEnum.intelligence,
        advantage: 0,
        value: 2,
        name: CharacterSkillsEnum.arcana
      },
      {
        base: BaseStatsEnum.strength,
        advantage: 0,
        value: -1,
        name: CharacterSkillsEnum.athletics
      },
      {
        base: BaseStatsEnum.charisma,
        advantage: 0,
        value: 2,
        name: CharacterSkillsEnum.performance
      },
      {
        base: BaseStatsEnum.charisma,
        advantage: 0,
        value: 2,
        name: CharacterSkillsEnum.intimidation
      },
      {
        base: BaseStatsEnum.dexterity,
        advantage: 2,
        value: 7,
        name: CharacterSkillsEnum.sleight_of_hand
      },
      {
        base: BaseStatsEnum.wisdom,
        advantage: 0,
        value: 2,
        name: CharacterSkillsEnum.history
      },
      {
        base: BaseStatsEnum.wisdom,
        advantage: 0,
        value: 0,
        name: CharacterSkillsEnum.medicine
      },
      {
        base: BaseStatsEnum.dexterity,
        advantage: 1,
        value: 5,
        name: CharacterSkillsEnum.stealth
      },
      {
        base: BaseStatsEnum.wisdom,
        advantage: 0,
        value: 0,
        name: CharacterSkillsEnum.animal_handling
      },
      {
        base: BaseStatsEnum.wisdom,
        advantage: 0,
        value: 0,
        name: CharacterSkillsEnum.insight
      },
      {
        base: BaseStatsEnum.intelligence,
        advantage: 0,
        value: 2,
        name: CharacterSkillsEnum.investigation
      },
      {
        base: BaseStatsEnum.intelligence,
        advantage: 0,
        value: 2,
        name: CharacterSkillsEnum.nature
      },
      {
        base: BaseStatsEnum.intelligence,
        advantage: 0,
        value: 2,
        name: CharacterSkillsEnum.religion
      },
      {
        base: BaseStatsEnum.charisma,
        advantage: 2,
        value: 6,
        name: CharacterSkillsEnum.deception
      },
      {
        base: BaseStatsEnum.wisdom,
        advantage: 0,
        value: 0,
        name: CharacterSkillsEnum.survival
      },
      {
        base: BaseStatsEnum.charisma,
        advantage: 1,
        value: 4,
        name: CharacterSkillsEnum.persuasion
      },
      {
        base: BaseStatsEnum.wisdom,
        advantage: 1,
        value: 2,
        name: CharacterSkillsEnum.perception
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
