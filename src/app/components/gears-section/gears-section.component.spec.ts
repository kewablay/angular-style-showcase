import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GearsSectionComponent } from './gears-section.component';

describe('GearsSectionComponent', () => {
  let component: GearsSectionComponent;
  let fixture: ComponentFixture<GearsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GearsSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GearsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
