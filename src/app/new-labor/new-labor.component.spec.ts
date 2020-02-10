import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLaborComponent } from './new-labor.component';

describe('NewLaborComponent', () => {
  let component: NewLaborComponent;
  let fixture: ComponentFixture<NewLaborComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLaborComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
