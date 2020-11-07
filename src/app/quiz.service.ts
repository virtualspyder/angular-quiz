import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Question } from './question.model';

@Injectable({
  providedIn: 'root'
})

export class QuizService {

  constructor(private http: HttpClient) { }

  public loadQuestions(fileName: string) {
    return this.http.get(`./assets/maths.json`)
      .pipe(
        map((result: any[]) => {
          return result.map((r) => new Question(r.label, r.choices));
        })
      );
  }
}