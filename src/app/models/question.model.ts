import { Answer } from './answer.model';

export interface Question {
  Text: string;
  Multiselect: Boolean;
  Answers: Answer[];
}
