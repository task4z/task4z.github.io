import { createAction, props } from '@ngrx/store';
import { AllQuestions } from 'src/app/models/all-questions.model';

export const moveToQuestion = createAction(
  '[Test Component] Move To Question',
  props<{ id: number}>()
);

export const createTest = createAction(
  '[Test Component] Create New Test'
);

export const createTestSucceeded = createAction(
  '[Test Component] Create New Test Succeeded',
  props<{test: AllQuestions[]}>()
);
