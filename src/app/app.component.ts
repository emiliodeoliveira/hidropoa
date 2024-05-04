import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MonitorGuaibaComponent} from './monitor-guaiba/monitor-guaiba.component'
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MonitorGuaibaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'monitor-porto-alegre';
}
