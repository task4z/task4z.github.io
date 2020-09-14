import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectTest } from '../store/selector/test.selector';
import { createTest } from '../store/action/test.actions';

@Component({
  selector: 'app-scrum-tests',
  templateUrl: './scrum-tests.component.html',
  styleUrls: ['./scrum-tests.component.scss']
})
export class ScrumTestsComponent implements OnInit {

  test$ = this.store.select(selectTest);

  constructor(private store: Store<{}>) {}

  ngOnInit() {
    this.store.dispatch(createTest());
  }

}
