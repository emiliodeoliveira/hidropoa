import { Component, Input, OnInit } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { SBDescriptionComponent } from '../common/dp.pomponent';
import { SBActionDescriptionComponent } from '../common/adp.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RiverInfo } from '../models/river-info';
import { HidrowebService } from '../hidroweb.service';

interface Day {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-monitor-guaiba',
  standalone: true,
  templateUrl: './monitor-guaiba.component.html',
  styleUrls: ['./monitor-guaiba.component.css'],
  providers: [HidrowebService],
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, SBActionDescriptionComponent, NgChartsModule, SBDescriptionComponent, FormsModule, CommonModule]
})
export class MonitorGuaibaComponent implements OnInit{
  days: Day[] = [
    {value: 7, viewValue: '7 dias'},
    {value: 1, viewValue: '24 horas'}
  ];
  
  @Input() selectedDaysInterval: number = 7
  public guaibaRiverData: RiverInfo[] = [];
  public dateValue = new Date(); 
  public lastRiverDate: Date = new Date();
  public lastRiverValue: number = 0;

  public width: string = '75%';
  public haveData: boolean = false;
  // Chart.js bindings
  public lineChartData: any = { labels: [], datasets: [{ data: [], label: 'Estação Cais Mauá C6', fill: false, borderColor: '#3e95cd' }] };
  public lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: true } },
    scales: { y: { title: { display: true, text: 'Metros' }, min: 0 } }
  };
  datePipe: any;


public title: string = 'Nivel Guaiba';

constructor(private hidrowebService: HidrowebService) {}

parseData(jsonData: any){
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - this.selectedDaysInterval);
  this.guaibaRiverData = [];
  const riverDataFiltered = Array.isArray(jsonData) ? jsonData.filter((d: any) => d.medicoes) : [];
  for (let i = 0; i < riverDataFiltered.length; i++){
    const item = riverDataFiltered[i];
    if (!item) { continue; }
    const date = new Date(item.horDataHora);
    if (date >= cutoff) {
      const data = new RiverInfo(date,
        (item.horNivelAdotado/100),
        item.horEstacao);
      this.guaibaRiverData.push(data);
    }
  }
}

ngOnInit(){
  this.hidrowebService.guaibaData().subscribe(
    (data: any) => {
      this.parseData(data);
      this.getLastValues();
      this.haveData = this.guaibaRiverData.length > 0;
      this.buildChart();
    });
}

getLastValues() {
  const index = this.guaibaRiverData.length;
  if (index === 0) { return; }
  this.lastRiverDate = this.guaibaRiverData[index-1].getLastDate();
  this.lastRiverValue = this.guaibaRiverData[index-1].getRiverLevel();
}

buildChart(){
  const labels: string[] = [];
  const values: number[] = [];
  for (let i = 0; i < this.guaibaRiverData.length; i++){
    const item = this.guaibaRiverData[i];
    labels.push(item.getLastDate().toLocaleString());
    values.push(item.getRiverLevel());
  }
  this.lineChartData = { labels, datasets: [{ data: values, label: 'Estação Cais Mauá C6', fill: false, borderColor: '#3e95cd' }] };
}
}