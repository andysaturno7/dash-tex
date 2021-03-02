import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigConfettiComponent } from './config-confetti.component';

describe('ConfigConfettiComponent', () => {
  let component: ConfigConfettiComponent;
  let fixture: ComponentFixture<ConfigConfettiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigConfettiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigConfettiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
