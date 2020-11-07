import { Choice } from './choice.model';

export class Question {
    constructor(
      public label: string,
      public choices: Choice[]
    ) { }
  }
  