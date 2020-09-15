import { createReducer, on, Action } from '@ngrx/store';
import { createTest, createTestSucceeded } from '../action/test.actions';
import { AllQuestions } from 'src/app/models/all-questions.model';

export interface TestState {
  test: AllQuestions;
  isLoading: boolean;
  error: string;
}

export const testFeatureKey = 'test';

export const initialState: TestState = {
  test: null,
  isLoading: false,
  error: ''
};

const testReducer = createReducer(
  initialState,
  on(
    createTestSucceeded,
    (state, { test }) => ({
      ...state,
      test,
    })
  )
  );

export function reducer(state: TestState | undefined, action: Action) {
  return testReducer(state, action);
}
