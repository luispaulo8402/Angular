import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitCursoComponent } from './init-curso.component';

describe('InitCursoComponent', () => {
  let component: InitCursoComponent;
  let fixture: ComponentFixture<InitCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
