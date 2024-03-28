import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayertypeSelectComponent } from './playertype-select.component';

describe('PlayertypeSelectComponent', () => {
  let component: PlayertypeSelectComponent;
  let fixture: ComponentFixture<PlayertypeSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayertypeSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayertypeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
