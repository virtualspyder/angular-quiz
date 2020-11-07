import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // quiz: Quiz[];

  constructor(
    // public questionsService: QuestionsService
  ) { }

  ngOnInit() {
    // this.questionsService.getQuiz().subscribe((quiz) => {this.quiz = quiz;});
  }

  // reset() {
  //   this.quiz = undefined;
  // }
  
}