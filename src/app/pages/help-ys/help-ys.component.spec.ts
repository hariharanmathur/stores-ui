import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpYsComponent } from './help-ys.component';

describe('HelpYsComponent', () => {
  let component: HelpYsComponent;
  let fixture: ComponentFixture<HelpYsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpYsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpYsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
