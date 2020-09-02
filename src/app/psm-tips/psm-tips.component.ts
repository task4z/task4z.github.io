import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-psm-tips',
  templateUrl: './psm-tips.component.html',
  styleUrls: ['./psm-tips.component.css']
})
export class PsmTipsComponent implements AfterViewInit {

  @ViewChild('btnCreateTest') createTest;
  createTest$: Observable<any>;

  constructor(private router: Router){}

  ngAfterViewInit() {
    this.createTest$ = fromEvent(this.createTest.nativeElement, 'click');
    this.createTest$.subscribe(() => this.router.navigate(['/scrum-test']));
  }
}
