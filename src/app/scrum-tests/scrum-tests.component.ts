import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectTestList, selectAppComponentViewModel } from '../store/selector/test.selector';
import { createTest, createTestSucceeded } from '../store/action/test.actions';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-scrum-tests',
  templateUrl: './scrum-tests.component.html',
  styleUrls: ['./scrum-tests.component.scss']
})
export class ScrumTestsComponent implements OnInit {

  test$ = this.store.select(selectAppComponentViewModel);

  constructor(private store: Store<{}>) {}

  ngOnInit() {
    this.store.dispatch(createTest());
  }

}
