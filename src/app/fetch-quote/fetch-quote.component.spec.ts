import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchQuoteComponent } from './fetch-quote.component';

describe('FetchQuoteComponent', () => {
  let component: FetchQuoteComponent;
  let fixture: ComponentFixture<FetchQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
