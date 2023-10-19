import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Character } from '../models/Character';
import { DummyData } from '../models/DummyData';
import { StatsService } from './stats.service';
import { SkillsService } from './skills.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private dummyData: DummyData,
    private statsService: StatsService,
    private skillsService: SkillsService
    ) { }

  public getCharacter():Observable<Character> {
    let character = this.dummyData.char;
    this.statsService.calculateStats(character);
    this.skillsService.calculateSkillValue(character);

    return of(character);
  }
    
}
