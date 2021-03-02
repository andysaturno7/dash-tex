import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomConfigComponent } from './zoom-config.component';

describe('ZoomConfigComponent', () => {
  let component: ZoomConfigComponent;
  let fixture: ComponentFixture<ZoomConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoomConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
