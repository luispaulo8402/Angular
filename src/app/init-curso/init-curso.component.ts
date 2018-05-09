import { Component, OnInit } from '@angular/core';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-init-curso',
  templateUrl: './init-curso.component.html',
  styleUrls: ['./init-curso.component.css']
})
export class InitCursoComponent implements OnInit {

  nomePortal: string;

  cursos: string[];

  constructor( private cursoService: CursoService) { 

    this.nomePortal = 'http://google.com.br';

    //var servico = new CursoService();

    this.cursos = this.cursoService.getCursos();

  }

  ngOnInit() {
  }

}
