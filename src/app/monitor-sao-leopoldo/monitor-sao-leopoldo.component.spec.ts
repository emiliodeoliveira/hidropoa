import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorSaoLeopoldoComponent } from './monitor-sao-leopoldo.component';

describe('MonitorSaoLeopoldoComponent', () => {
  let component: MonitorSaoLeopoldoComponent;
  let fixture: ComponentFixture<MonitorSaoLeopoldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitorSaoLeopoldoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonitorSaoLeopoldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
