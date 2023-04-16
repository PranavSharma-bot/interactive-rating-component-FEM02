import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppThankuComponentComponent } from './app.thanku.component.component';

describe('AppThankuComponentComponent', () => {
  let component: AppThankuComponentComponent;
  let fixture: ComponentFixture<AppThankuComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppThankuComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppThankuComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
