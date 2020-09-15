import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError, switchMap, concatMap, tap } from 'rxjs/operators';
import { TestService } from '../service/test.service';
import { createTestSucceeded, createTest } from '../action/test.actions';
import { AllQuestions } from 'src/app/models/all-questions.model';

export const NROFITEMS = 5;
@Injectable()
export class TestEffects {

  @Effect()
  loadQuestions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createTest),
      concatMap(() => this.testsService.getQuestions()),
      map(test => createTestSucceeded({test})),
      tap(res => res.test.Questions = this.shuffle(res.test.Questions))
    )
  );

  constructor(
    private actions$: Actions,
    private testsService: TestService
  ) {}

  private shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array && array.length && array.length < NROFITEMS ? array : array.slice(0, NROFITEMS);
  }
}
