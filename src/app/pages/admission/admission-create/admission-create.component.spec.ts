import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionCreateComponent } from './admission-create.component';

describe('AdmissionCreateComponent', () => {
  let component: AdmissionCreateComponent;
  let fixture: ComponentFixture<AdmissionCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
