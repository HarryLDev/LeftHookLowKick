import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivesSelectComponent } from './lives-select.component';

describe('LivesSelectComponent', () => {
  let component: LivesSelectComponent;
  let fixture: ComponentFixture<LivesSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivesSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LivesSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
