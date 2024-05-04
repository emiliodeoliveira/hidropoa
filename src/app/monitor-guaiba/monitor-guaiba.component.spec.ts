import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorGuaibaComponent } from './monitor-guaiba.component';
import { FormsModule } from '@angular/forms';

describe('MonitorGuaibaComponent', () => {
  let component: MonitorGuaibaComponent;
  let fixture: ComponentFixture<MonitorGuaibaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitorGuaibaComponent,FormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonitorGuaibaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
