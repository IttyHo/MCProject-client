import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEntrepreneurComponent } from './update-entrepreneur.component';

describe('UpdateEntrepreneurComponent', () => {
  let component: UpdateEntrepreneurComponent;
  let fixture: ComponentFixture<UpdateEntrepreneurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEntrepreneurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEntrepreneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
