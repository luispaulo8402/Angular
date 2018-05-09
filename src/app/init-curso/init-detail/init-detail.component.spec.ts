import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitDetailComponent } from './init-detail.component';

describe('InitDetailComponent', () => {
  let component: InitDetailComponent;
  let fixture: ComponentFixture<InitDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
