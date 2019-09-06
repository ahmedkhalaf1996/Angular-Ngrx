import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpelreducerComponent } from './simpelreducer.component';

describe('SimpelreducerComponent', () => {
  let component: SimpelreducerComponent;
  let fixture: ComponentFixture<SimpelreducerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpelreducerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpelreducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
