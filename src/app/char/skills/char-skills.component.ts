import { Component } from '@angular/core';
import { Character } from 'src/app/models/Character';
import { Stats } from 'src/app/models/enums/Stats';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'char-skills',
  templateUrl: './char-skills.component.html'  
})

export class CharSkillsComponent {
  character!: Character;  
  
  constructor(private characterService: CharacterService) {
    
   }
 
  ngOnInit(): void {
  this.characterService.getCharacter().subscribe(c => {
      this.character = c;
    });
  }

  public getShortName(stat : Stats) : string {
    return stat.toString().substring(0,3);
  }

}
