import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitCursoComponent } from './init-curso.component';
import { InitDetailComponent } from './init-detail/init-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InitCursoComponent, InitDetailComponent],

exports:[
  InitCursoComponent
]

})
export class InitCursoModule { }
