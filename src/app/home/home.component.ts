import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MonitorGuaibaComponent } from '../monitor-guaiba/monitor-guaiba.component';
import { VoluntariadoComponent } from '../voluntariado/voluntariado.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, MonitorGuaibaComponent, VoluntariadoComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

}
