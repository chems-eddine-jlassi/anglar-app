import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertiseurComponent } from './convertiseur.component';

describe('ConvertiseurComponent', () => {
  let component: ConvertiseurComponent;
  let fixture: ComponentFixture<ConvertiseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertiseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertiseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
