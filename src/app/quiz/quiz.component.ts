import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Answers } from '../answers.model';
import { Choice } from '../choice.model';
import { Question } from '../question.model';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  answers: Answers;
  questions: Question[];
  index: number;

  results = false;

  constructor(
    private route: ActivatedRoute,
    public quizService: QuizService) { }

  ngOnInit() {
    this.quizService.loadQuestions(this.route.snapshot.params.quizId)
      .subscribe((questions) => {
        this.questions = questions;
        this.answers = new Answers();
        this.index = 0;
      });
  }

  update(choice: Choice) {
    this.answers.values[this.index] = choice;
  }

  nextResult() {
    if (this.index === this.questions.length - 1) {
      this.results = true;
      return;
    }

    this.index++;
  }

}