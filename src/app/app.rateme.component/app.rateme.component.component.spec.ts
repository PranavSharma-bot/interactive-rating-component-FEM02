import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRatemeComponentComponent } from './app.rateme.component.component';

describe('AppRatemeComponentComponent', () => {
  let component: AppRatemeComponentComponent;
  let fixture: ComponentFixture<AppRatemeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppRatemeComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppRatemeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
