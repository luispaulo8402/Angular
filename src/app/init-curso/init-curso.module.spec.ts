import { InitCursoModule } from './init-curso.module';

describe('InitCursoModule', () => {
  let initCursoModule: InitCursoModule;

  beforeEach(() => {
    initCursoModule = new InitCursoModule();
  });

  it('should create an instance', () => {
    expect(initCursoModule).toBeTruthy();
  });
});
