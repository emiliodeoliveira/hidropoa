import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorChuvasComponent } from './monitor-chuvas.component';

describe('MonitorChuvasComponent', () => {
  let component: MonitorChuvasComponent;
  let fixture: ComponentFixture<MonitorChuvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitorChuvasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonitorChuvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
