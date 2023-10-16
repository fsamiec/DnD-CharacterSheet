import { CharacterBaseData } from './CharacterBaseData';
import { CharacterStats } from "./CharacterStats";
import { CharacterSkills } from "./CharacterSkills";

export interface Character {
  base: CharacterBaseData;
  stats: CharacterStats;
  skills: CharacterSkills;
}

