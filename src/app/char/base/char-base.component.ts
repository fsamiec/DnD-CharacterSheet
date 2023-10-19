import { Component } from '@angular/core';
import { Character } from '../../models/Character';
import { CharacterService } from 'src/app/services/character.service';
import { CharacterBaseData } from 'src/app/models/CharacterBaseData';

@Component({
  selector: 'char-base',
  templateUrl: './char-base.component.html'
})
export class CharBaseComponent {
 characterBaseData!: CharacterBaseData;
  
 constructor(private characterService: CharacterService) { }

 ngOnInit(): void {
   this.characterService.getCharacter().subscribe(c => this.characterBaseData = c.base);
 }
 
}
