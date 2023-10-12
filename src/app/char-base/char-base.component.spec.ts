import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharBaseComponent } from './char-base.component';

describe('CharBaseComponent', () => {
  let component: CharBaseComponent;
  let fixture: ComponentFixture<CharBaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharBaseComponent]
    });
    fixture = TestBed.createComponent(CharBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
