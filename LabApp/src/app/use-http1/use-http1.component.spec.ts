import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseHttp1Component } from './use-http1.component';

describe('UseHttp1Component', () => {
  let component: UseHttp1Component;
  let fixture: ComponentFixture<UseHttp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseHttp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseHttp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
