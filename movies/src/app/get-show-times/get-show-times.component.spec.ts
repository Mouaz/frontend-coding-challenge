import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetShowTimesComponent } from './get-show-times.component';

describe('GetShowTimesComponent', () => {
  let component: GetShowTimesComponent;
  let fixture: ComponentFixture<GetShowTimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetShowTimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetShowTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
