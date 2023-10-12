import { Component } from '@angular/core';
import { Character } from '../../models/Character';

@Component({
  selector: 'char-base',
  templateUrl: './char-base.component.html',
  styleUrls: ['./char-base.component.scss'],
})
export class CharBaseComponent {
  char: Character = {
    base: {
      character_name: 'Niptac',
      character_class: 'Schurke',
      background: 'Scharlatan',      
      xp: 0,
      level: 3,
      player_name: 'Frank',
      race: 'Gnom',
      sub_race: 'Felsengnom'
    },
  };
}
