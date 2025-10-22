import { Component, Input, OnInit } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { SBDescriptionComponent } from '../common/dp.pomponent';
import { SBActionDescriptionComponent } from '../common/adp.component';
import { RiverInfo } from '../models/river-info';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HidrowebService } from '../hidroweb.service';

interface Day {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-monitor-sao-leopoldo',
  standalone: true,
  templateUrl: './monitor-sao-leopoldo.component.html',
  styleUrls: ['./monitor-sao-leopoldo.component.css'],
  providers: [HidrowebService],
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, SBActionDescriptionComponent, NgChartsModule, SBDescriptionComponent, FormsModule, CommonModule]
})
export class MonitorSaoLeopoldoComponent implements OnInit{

  @Input() selectedDaysInterval: number = 7
  // use constructor injection (see constructor below)
  public saoLeopoldoData: RiverInfo[] = [];
  public dateValue = new Date(); 
  public lastRiverDate: Date = new Date();
  public lastRiverValue: number = 0;

  public width: string = '75%';

  // Chart.js (ng2-charts) bindings
  public lineChartData: any = {
    labels: [] as string[],
    datasets: [
      { data: [] as number[], label: 'Rio dos Sinos', fill: false, borderColor: '#3e95cd' }
    ]
  };
  public lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true }
    },
    scales: {
      x: { ticks: { maxRotation: 45, minRotation: 0 } },
      y: { title: { display: true, text: 'Metros' }, min: 0 }
    }
  };


// removed Syncfusion-specific theming/load handler

public title: string = 'Nivel Guaiba';

constructor(private hidrowebService: HidrowebService) {}

parseData(jsonData: any){
  // compute cutoff date locally so we don't mutate the component-level dateValue
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - this.selectedDaysInterval);
  this.saoLeopoldoData = [];
  for (const k in jsonData){
    if (!Object.prototype.hasOwnProperty.call(jsonData, k)) { continue; }
    const date = new Date(jsonData[k].horDataHora);
    if (date >= cutoff){
      const data = new RiverInfo(date,
      (jsonData[k].horNivelAdotado/100),
      jsonData[k].horEstacao);
      this.saoLeopoldoData.push(data);
    }
  }
}


ngOnInit(){
  this.hidrowebService.campoBomData().subscribe(
    data => {
      this.parseData(data);
      this.getLastValues();
      this.buildChart();
    });
}

  getLastValues() {
    const index = this.saoLeopoldoData.length;
    if (index === 0) {
      // no data available
      return;
    }
    this.lastRiverDate = this.saoLeopoldoData[index-1].getLastDate();
    this.lastRiverValue = this.saoLeopoldoData[index-1].getRiverLevel();
  }

  buildChart(){
    const labels: string[] = [];
    const values: number[] = [];
    for (let i = 0; i < this.saoLeopoldoData.length; i++){
      const item = this.saoLeopoldoData[i];
      labels.push(item.getLastDate().toLocaleString());
      values.push(item.getRiverLevel());
    }
    this.lineChartData = { labels, datasets: [{ data: values, label: 'Rio dos Sinos', fill: false, borderColor: '#3e95cd' }] };
  }
}