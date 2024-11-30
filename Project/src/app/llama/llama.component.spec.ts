import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlamaComponent } from './llama.component';

describe('LlamaComponent', () => {
  let component: LlamaComponent;
  let fixture: ComponentFixture<LlamaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LlamaComponent]
    });
    fixture = TestBed.createComponent(LlamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
