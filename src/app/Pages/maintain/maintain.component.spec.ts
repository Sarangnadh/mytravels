import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainComponent } from './maintain.component';

describe('MaintainComponent', () => {
  let component: MaintainComponent;
  let fixture: ComponentFixture<MaintainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaintainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
