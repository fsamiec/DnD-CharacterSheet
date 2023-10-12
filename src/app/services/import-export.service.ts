import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Character } from '../models/Character';

@Injectable({
  providedIn: 'root'
})
export class ImportExportService {

  constructor(private sanitizer: DomSanitizer) { }

  export(character: Character ) : string {
    return JSON.stringify(character);        
  }

  import(character: string) : Character {
    return JSON.parse(character)
  }
}
