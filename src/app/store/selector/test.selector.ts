import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTest from '../reducer/test.reducer';
import { getRouterState } from 'src/app/router-store/router.reducer';

// Lookup the 'Test' feature state managed by NgRx
const getTestState = createFeatureSelector<fromTest.TestState>(
  fromTest.testFeatureKey
);

export const selectTest = createSelector(
  getTestState,
  getRouterState,
  (state, route) => ({
    state ,
    route
  })
);
/*
  private selectQuestions(questions: AllQuestions[]): AllQuestions[] {
    return this.shuffle(questions.map(e => {
      this.shuffle(e.Questions);
    }));
  }

  private shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  */
