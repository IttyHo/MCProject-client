import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateConselorComponent } from './update-conselor.component';

describe('UpdateConselorComponent', () => {
  let component: UpdateConselorComponent;
  let fixture: ComponentFixture<UpdateConselorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateConselorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateConselorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
