import { Component } from '@angular/core';
import { Character } from '../../models/Character';
import { CharacterRace } from '../../models/enums/CharacterRace';
import { FormBuilder } from '@angular/forms';
import { DummyData } from 'src/app/models/DummyData';
import { CharacterService } from 'src/app/services/character.service';


@Component({
  selector: 'char-base',
  templateUrl: './char-base.component.html',
  styleUrls: ['./char-base.component.scss'],
})
export class CharBaseComponent {
 char!: Character;
  
 constructor(private characterService: CharacterService) { }

 ngOnInit(): void {
   this.characterService.getCharacter().subscribe(c => this.char = c);
 }
 
}
