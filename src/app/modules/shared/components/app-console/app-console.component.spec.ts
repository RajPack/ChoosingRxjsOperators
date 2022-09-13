import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppConsoleComponent } from './app-console.component';

describe('AppConsoleComponent', () => {
  let component: AppConsoleComponent;
  let fixture: ComponentFixture<AppConsoleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppConsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
