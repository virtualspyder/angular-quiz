import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Question } from '../question.model';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.css']
})
export class QuizFormComponent implements OnInit {

  @Input() question: Question;
  @Output() onChoiceMade = new EventEmitter<string>();

  public form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      choice: new FormControl()
    });

    this.form.valueChanges.subscribe(this.onChange);
  }

  onChange = () => {
    this.onChoiceMade.emit(this.form.value.choice);
  }
}