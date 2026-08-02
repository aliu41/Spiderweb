import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wordle } from './wordle';

describe('Wordle', () => {
  let component: Wordle;
  let fixture: ComponentFixture<Wordle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Wordle],
    }).compileComponents();

    fixture = TestBed.createComponent(Wordle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
