import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsApi } from './signals-api';

describe('SignalsApi', () => {
  let component: SignalsApi;
  let fixture: ComponentFixture<SignalsApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsApi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsApi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
