import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoveInstallComponent } from './promove-install.component';

describe('PromoveInstallComponent', () => {
  let component: PromoveInstallComponent;
  let fixture: ComponentFixture<PromoveInstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoveInstallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoveInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
