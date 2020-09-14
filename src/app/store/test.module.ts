import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromTest from './reducer/test.reducer';
import { TestEffects } from './effect/test.effect';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([TestEffects]),
    StoreModule.forFeature(fromTest.testFeatureKey, fromTest.reducer),
  ],
  declarations: []
})
export class TestStateModule {}
