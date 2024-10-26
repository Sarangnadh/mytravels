import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotconfirmComponent } from './slotconfirm.component';

describe('SlotconfirmComponent', () => {
  let component: SlotconfirmComponent;
  let fixture: ComponentFixture<SlotconfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlotconfirmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlotconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
