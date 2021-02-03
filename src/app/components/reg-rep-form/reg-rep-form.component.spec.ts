import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegRepFormComponent } from './reg-rep-form.component';

describe('RegRepFormComponent', () => {
  let component: RegRepFormComponent;
  let fixture: ComponentFixture<RegRepFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegRepFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegRepFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
