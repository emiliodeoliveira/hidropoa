import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonitorChuvasComponent } from './monitor-chuvas.component';
import { FormsModule } from '@angular/forms';

describe('MonitorChuvasComponent', () => {
  let component: MonitorChuvasComponent;
  let fixture: ComponentFixture<MonitorChuvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitorChuvasComponent,FormsModule]
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
