import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewScienceMagazineComponent } from './new-science-magazine.component';

describe('NewScienceMagazineComponent', () => {
  let component: NewScienceMagazineComponent;
  let fixture: ComponentFixture<NewScienceMagazineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewScienceMagazineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewScienceMagazineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
