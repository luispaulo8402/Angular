import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitCursoComponent } from './init-curso.component';
import { InitDetailComponent } from './init-detail/init-detail.component';
import { CursoService } from './curso.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InitCursoComponent, InitDetailComponent],

exports:[
  InitCursoComponent
],
providers:[CursoService]

})
export class InitCursoModule { }
