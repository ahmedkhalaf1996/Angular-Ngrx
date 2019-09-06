import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoringCenterComponent } from './storing-center.component';

describe('StoringCenterComponent', () => {
  let component: StoringCenterComponent;
  let fixture: ComponentFixture<StoringCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoringCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoringCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
