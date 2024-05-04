import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MonitorGuaibaComponent} from './monitor-guaiba/monitor-guaiba.component'
import { MonitorChuvasComponent } from './monitor-chuvas/monitor-chuvas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MonitorGuaibaComponent, MonitorChuvasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'monitora-porto-alegre';
}
