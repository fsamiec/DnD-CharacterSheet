import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Character } from '../models/Character';
import { DummyData } from '../models/DummyData';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private dummyData: DummyData) { }

  getCharacter():Observable<Character> {
    return of(this.dummyData.char);    
  }
}
