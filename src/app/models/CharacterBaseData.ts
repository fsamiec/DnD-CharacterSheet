
export interface CharacterBaseData {
      character_name: string;
      character_class: string;
      level: number;
      player_name: string;
      background: string;
      race: string;
      max_hit_points: number;
      current_hit_points: number;
      temporary_hit_points: number;
      hit_dice: number;      
}

export interface CharacterFlavor {
      personality_traits: string;
      ideals: string;
      bonds: string;
      flaws: string;
}