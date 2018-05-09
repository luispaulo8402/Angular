import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InitAngularComponent } from './init-angular/init-angular.component';
import { Component2Component } from './component2/component2.component';
import { InitCursoModule } from './init-curso/init-curso.module';


@NgModule({
  declarations: [
    AppComponent,
    InitAngularComponent,
    Component2Component
  ],
  imports: [
    BrowserModule,
    InitCursoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
