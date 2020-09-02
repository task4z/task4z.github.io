import { createReducer, on, Action } from '@ngrx/store';
import { createTest, createTestSucceeded } from '../action/test.actions';
import { AllQuestions } from 'src/app/models/all-questions.model';

export interface State {
  test: AllQuestions[];
  isLoading: boolean;
  error: string;
}

export const testFeatureKey = 'test';

export const initialState: State = {
  test: [],
  isLoading: false,
  error: ''
};

const testReducer = createReducer(
  initialState,
  on(
    createTest,
    createTestSucceeded,
    state => ({ ...state, isLoading: true, error: '' })
  ),
  on(
    createTestSucceeded,
    createTestSucceeded,
    (state, { test }) => ({
      ...state,
      test,
      isLoading: false
    })
  )
  );

export function reducer(state: State | undefined, action: Action) {
  return testReducer(state, action);
}
