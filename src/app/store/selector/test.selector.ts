import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTest from '../reducer/test.reducer';
import { getRouterState } from 'src/app/router-store/router.reducer';

// Lookup the 'Test' feature state managed by NgRx
const getTestState = createFeatureSelector<fromTest.State>(
  fromTest.testFeatureKey
);

export const selectTestList = createSelector(
  getTestState,
  getRouterState,
  state => state.test
);

export const selectAppComponentViewModel = createSelector(
  selectTestList,
  getRouterState,
  (test, route) => ({
    test,
    route
  })
);
