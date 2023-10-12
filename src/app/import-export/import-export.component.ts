import { Component } from '@angular/core';
import { ImportExportService } from '../services/import-export.service';
import { Character } from '../models/Character';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'import-export',
  templateUrl: './import-export.component.html',
  styleUrls: ['./import-export.component.scss']
})
export class ImportExportComponent {

  char: Character = {
    base: {
      character_name: 'Niptac',
      character_class: 'Schurke',
      background: 'Scharlatan',      
      experience_points: 0,
      level: 3,
      player_name: 'Frank',
      race: 'Gnom',
      sub_race: 'Felsengnom'
    },
  };
  
  public downloadJsonHref : SafeUrl = "";
  constructor(private importExportService: ImportExportService, private sanitizer: DomSanitizer) {
    var json = this.importExportService.export(this.char);
    var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(json));
        this.downloadJsonHref = uri;
  }

  public onExportClick() {
    var json = this.importExportService.export(this.char);
    var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(json));
        this.downloadJsonHref = uri;
  }

  
}
