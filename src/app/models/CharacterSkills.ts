import { BaseStatsEnum, CharacterSkillsEnum } from "./enums/CharacterRace";

export interface CharacterSkills{
      advantage: number;      
      value: number;
      base: BaseStatsEnum;
      name: CharacterSkillsEnum
}
