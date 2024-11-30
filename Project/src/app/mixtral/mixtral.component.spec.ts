import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixtralComponent } from './mixtral.component';

describe('MixtralComponent', () => {
  let component: MixtralComponent;
  let fixture: ComponentFixture<MixtralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MixtralComponent]
    });
    fixture = TestBed.createComponent(MixtralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
