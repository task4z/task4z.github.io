import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromTest from './reducer/test.reducer';
import { TestEffects } from './effect/test.effect';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromTest.testFeatureKey, fromTest.reducer),
    EffectsModule.forFeature([TestEffects])
  ],
  declarations: []
})
export class TestStateModule {}
