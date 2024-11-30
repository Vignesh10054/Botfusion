import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DalleComponent } from './dalle.component';

describe('DalleComponent', () => {
  let component: DalleComponent;
  let fixture: ComponentFixture<DalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DalleComponent]
    });
    fixture = TestBed.createComponent(DalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
