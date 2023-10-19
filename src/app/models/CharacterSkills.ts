import { Skills } from "./enums/Skills";
import { Stats } from "./enums/Stats";

export interface CharacterSkills{
      proficiency: number;      
      value: number;
      attribute: Stats;
      name: Skills
}
