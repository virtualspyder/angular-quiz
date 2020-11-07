import { Component, Input, OnInit } from '@angular/core';
import { Answers } from '../answers.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

export class ResultComponent {
  @Input() answers: Answers;
}