
import { BaseStats } from "./BaseStats";
import { CalculatedStats } from "./CalculatedStats";
import { SavingThrows } from "./SavingThrows";

export interface CharacterStats extends BaseStats {
      calculated: CalculatedStats;
      saving_throws: SavingThrows;      
}
