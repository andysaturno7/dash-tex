import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrantsReportsComponent } from './registrants-reports.component';

describe('RegistrantsReportsComponent', () => {
  let component: RegistrantsReportsComponent;
  let fixture: ComponentFixture<RegistrantsReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrantsReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrantsReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
