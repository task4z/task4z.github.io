import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsmTipsComponent } from './psm-tips.component';

describe('PsmTipsComponent', () => {
  let component: PsmTipsComponent;
  let fixture: ComponentFixture<PsmTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsmTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsmTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
