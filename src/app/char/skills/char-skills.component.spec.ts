import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharSkillsComponent } from './char-skills.component';

describe('CharStatsComponent', () => {
  let component: CharSkillsComponent;
  let fixture: ComponentFixture<CharSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharSkillsComponent]
    });
    fixture = TestBed.createComponent(CharSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
