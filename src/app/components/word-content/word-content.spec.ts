import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordContent } from './word-content';

describe('WordContent', () => {
  let component: WordContent;
  let fixture: ComponentFixture<WordContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordContent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
