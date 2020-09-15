import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTest from '../reducer/test.reducer';
import { getRouterState } from 'src/app/router-store/router.reducer';
import { AllQuestions } from 'src/app/models/all-questions.model';
import { TestEffects } from '../effect/test.effect';
import { TestService } from '../service/test.service';


// Lookup the 'Test' feature state managed by NgRx
const getTestState = createFeatureSelector<fromTest.TestState>(
  fromTest.testFeatureKey
);

export const selectTest = createSelector(
  getTestState,
  state => state.test
);
