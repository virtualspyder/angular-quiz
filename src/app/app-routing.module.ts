import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: ':quiz', component: QuizComponent },
  { path: '', redirectTo: "home", pathMatch: "prefix" },
];