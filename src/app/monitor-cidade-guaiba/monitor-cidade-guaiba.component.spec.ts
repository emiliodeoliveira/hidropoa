import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorCidadeGuaibaComponent } from './monitor-cidade-guaiba.component';

describe('MonitorCidadeGuaibaComponent', () => {
  let component: MonitorCidadeGuaibaComponent;
  let fixture: ComponentFixture<MonitorCidadeGuaibaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitorCidadeGuaibaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonitorCidadeGuaibaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
