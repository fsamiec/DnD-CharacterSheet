import { Component } from '@angular/core';
import { ImportExportService } from '../services/import-export.service';
import { Character } from '../models/Character';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { DummyData } from '../models/DummyData';

@Component({
  selector: 'import-export',
  templateUrl: './import-export.component.html',
  styleUrls: ['./import-export.component.scss'],
})
export class ImportExportComponent {
  char: Character;

  public downloadJsonHref: SafeUrl = '';
  constructor(
    private importExportService: ImportExportService,
    private sanitizer: DomSanitizer,
    dummyData: DummyData
  ) {
    this.char = dummyData.char;
    var json = this.importExportService.export(this.char);
    var uri = this.sanitizer.bypassSecurityTrustUrl(
      'data:text/json;charset=UTF-8,' + encodeURIComponent(json)
    );
    this.downloadJsonHref = uri;
  }
}
