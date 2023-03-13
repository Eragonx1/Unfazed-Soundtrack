import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarV2Component } from './search-bar-v2.component';

describe('SearchBarV2Component', () => {
  let component: SearchBarV2Component;
  let fixture: ComponentFixture<SearchBarV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBarV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
