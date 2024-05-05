import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MonitorGuaibaComponent } from '../monitor-guaiba/monitor-guaiba.component';
import { MonitorChuvasComponent } from '../monitor-chuvas/monitor-chuvas.component';
import { VoluntariadoComponent } from '../voluntariado/voluntariado.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, MonitorGuaibaComponent, MonitorChuvasComponent, VoluntariadoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

}
