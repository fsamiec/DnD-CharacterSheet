import { Component } from '@angular/core';
import { Character } from 'src/app/models/Character';
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
}
