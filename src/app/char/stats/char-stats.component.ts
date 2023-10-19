import { Component } from '@angular/core';
import { Character } from 'src/app/models/Character';
import { CharacterService } from 'src/app/services/character.service';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'char-stats',
  templateUrl: './char-stats.component.html'  
})

export class CharStatsComponent {
  character!: Character;    

  constructor(
    private characterService: CharacterService) { }
 
  ngOnInit(): void {
  this.characterService.getCharacter().subscribe(c => {
      this.character = c      
    });
  }
  
}
