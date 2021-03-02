import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaAppComponent } from './textarea-app.component';

describe('TextareaAppComponent', () => {
  let component: TextareaAppComponent;
  let fixture: ComponentFixture<TextareaAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextareaAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
