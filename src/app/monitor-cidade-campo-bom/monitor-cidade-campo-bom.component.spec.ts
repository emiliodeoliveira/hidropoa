import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorCidadeCampoBomComponent } from './monitor-cidade-campo-bom.component';

describe('MonitorCidadeCampoBomComponent', () => {
  let component: MonitorCidadeCampoBomComponent;
  let fixture: ComponentFixture<MonitorCidadeCampoBomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitorCidadeCampoBomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonitorCidadeCampoBomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
