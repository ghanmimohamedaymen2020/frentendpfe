import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFicheInventaireComponent } from './add-fiche-inventaire.component';

describe('AddFicheInventaireComponent', () => {
  let component: AddFicheInventaireComponent;
  let fixture: ComponentFixture<AddFicheInventaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFicheInventaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFicheInventaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
