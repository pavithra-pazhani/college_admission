import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionEditComponent } from './admission-edit.component';

describe('AdmissionEditComponent', () => {
  let component: AdmissionEditComponent;
  let fixture: ComponentFixture<AdmissionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
