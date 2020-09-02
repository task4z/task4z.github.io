import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreRouterConnectingModule, NavigationActionTiming, RouterStateSerializer, routerReducer } from '@ngrx/router-store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ScrumTestsComponent } from './scrum-tests/scrum-tests.component';
import { StocksComponent } from './stocks/stocks.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StoreModule } from '@ngrx/store';
import { reducers, CustomSerializer } from './router-store/router.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { TestStateModule } from './store/test.module';
import { PsmTipsComponent } from './psm-tips/psm-tips.component';
import { RouterEffects } from './router-store/router.effect';
import { PreviousResultsComponent } from './previous-results/previous-results.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ScrumTestsComponent,
    StocksComponent,
    PageNotFoundComponent,
    PsmTipsComponent,
    PreviousResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([RouterEffects]),
    StoreModule.forRoot(reducers),
    // Connects RouterModule with StoreModule, uses MinimalRouterStateSerializer by default
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
      navigationActionTiming: NavigationActionTiming.PostActivation,
    }),
    BrowserAnimationsModule,
    MaterialModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    TestStateModule,
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
  bootstrap: [AppComponent]
})
export class AppModule { }
