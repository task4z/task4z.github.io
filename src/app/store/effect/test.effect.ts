import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError, switchMap, concatMap, tap } from 'rxjs/operators';
import { TestService } from '../service/test.service';
import { createTestSucceeded, createTest } from '../action/test.actions';
import { AllQuestions } from 'src/app/models/all-questions.model';

@Injectable()
export class TestEffects {

  @Effect()
  loadQuestions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createTest),
      concatMap(() => this.testsService.getQuestions()),
      map(test => createTestSucceeded({test})),
    )
  );

  constructor(
    private actions$: Actions,
    private testsService: TestService
  ) {}
}
