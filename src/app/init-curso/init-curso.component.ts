import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-init-curso',
  templateUrl: './init-curso.component.html',
  styleUrls: ['./init-curso.component.css']
})
export class InitCursoComponent implements OnInit {

  nomePortal: string;

  cursos: string[] = ['Java', 'Angular', 'React'];

  constructor() { 

    this.nomePortal = 'http://google.com.br';



  }

  ngOnInit() {
  }

}
