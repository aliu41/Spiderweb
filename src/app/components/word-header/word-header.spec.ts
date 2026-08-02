import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordHeader } from './word-header';

describe('WordHeader', () => {
  let component: WordHeader;
  let fixture: ComponentFixture<WordHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(WordHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
