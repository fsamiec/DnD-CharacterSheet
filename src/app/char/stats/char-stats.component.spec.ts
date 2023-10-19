import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharStatsComponent } from './char-stats.component';

describe('CharStatsComponent', () => {
  let component: CharStatsComponent;
  let fixture: ComponentFixture<CharStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharStatsComponent]
    });
    fixture = TestBed.createComponent(CharStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
