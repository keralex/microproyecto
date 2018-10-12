import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationhomeComponent } from './navigationhome.component';

describe('NavigationhomeComponent', () => {
  let component: NavigationhomeComponent;
  let fixture: ComponentFixture<NavigationhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
