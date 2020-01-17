import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsMagazineComponent } from './requests-magazine.component';

describe('RequestsMagazineComponent', () => {
  let component: RequestsMagazineComponent;
  let fixture: ComponentFixture<RequestsMagazineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestsMagazineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestsMagazineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
