import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CARSCardListComponent } from './cars-card-list.component';

describe('CARSCardListComponent', () => {
  let component: CARSCardListComponent;
  let fixture: ComponentFixture<CARSCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CARSCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CARSCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
