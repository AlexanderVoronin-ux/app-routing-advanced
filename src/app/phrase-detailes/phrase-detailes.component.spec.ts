import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseDetailesComponent } from './phrase-detailes.component';

describe('PhraseDetailesComponent', () => {
  let component: PhraseDetailesComponent;
  let fixture: ComponentFixture<PhraseDetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhraseDetailesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhraseDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
