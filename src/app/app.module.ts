import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomSerializer } from './store/custom-serializer';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ScrumTestsComponent } from './scrum-tests/scrum-tests.component';
import { StocksComponent } from './stocks/stocks.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/index';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogComponent,
    ScrumTestsComponent,
    StocksComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    // Connects RouterModule with StoreModule, uses MinimalRouterStateSerializer by default
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
