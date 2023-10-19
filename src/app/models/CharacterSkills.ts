import { Skills } from "./enums/Skills";
import { Stats } from "./enums/Stats";

export interface CharacterSkills{
      advantage: number;      
      value: number;
      base: Stats;
      name: Skills
}
