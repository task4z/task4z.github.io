import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { TestService } from '../service/test.service';
import { createTestSucceeded, createTest } from '../action/test.actions';
import { AllQuestions } from 'src/app/models/all-questions.model';

@Injectable()
export class TestEffects {

  @Effect()
  loadQuestions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createTest),
      switchMap(() =>
        this.testsService.getQuestions().pipe(
          map(test =>
            createTestSucceeded(test)
            ),
          catchError(() => EMPTY)
          )
        )
      )
    );

  constructor(
    private actions$: Actions,
    private testsService: TestService
  ) {}

  private selectQuestions(questions:AllQuestions[]): AllQuestions[] {
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
}
