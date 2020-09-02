import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ScrumTestsComponent } from './scrum-tests/scrum-tests.component';
import { StocksComponent } from './stocks/stocks.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PsmTipsComponent } from './psm-tips/psm-tips.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'scrum-test',
    component: ScrumTestsComponent,
  },
  {
    path: 'psm',
    component: PsmTipsComponent,
  },
  {
    path: 'stocks',
    component: StocksComponent,
  },
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
