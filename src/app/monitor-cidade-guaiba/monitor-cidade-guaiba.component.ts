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
  selector: 'app-monitor-cidade-guaiba',
  standalone: true,
  templateUrl: './monitor-cidade-guaiba.component.html',
  styleUrls: ['./monitor-cidade-guaiba.component.css'],
  providers: [HidrowebService],
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, SBActionDescriptionComponent, NgChartsModule, SBDescriptionComponent, FormsModule, CommonModule]
})
export class MonitorCidadeGuaibaComponent implements OnInit{

  @Input() selectedDaysInterval: number = 7
  public cidadeGuaibaData: RiverInfo[] = [];
  public dateValue = new Date(); 
  public lastRiverDate: Date = new Date();
  public lastRiverValue: number = 0;


  public width: string = '75%';
  public lineChartData: any = { labels: [], datasets: [{ data: [], label: 'Estação Cais Mauá C6', fill: false, borderColor: '#3e95cd' }] };
  public lineChartOptions: any = { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: true } }, scales: { y: { title: { display: true, text: 'Metros' }, min: 0 } } };

public title: string = 'Nivel Guaiba';

constructor(private hidrowebService: HidrowebService) {}

parseData(jsonData: any){
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - this.selectedDaysInterval);
  this.cidadeGuaibaData = [];
  for (const k in jsonData){
    if (!Object.prototype.hasOwnProperty.call(jsonData, k)) { continue; }
    const date = new Date(jsonData[k].date);
    if (date >= cutoff){
      const data = new RiverInfo(date,
      (jsonData[k].horNivelAdotado/100),
      jsonData[k].horEstacao);
      this.cidadeGuaibaData.push(data);
    }
  }
}

ngOnInit(){
  this.hidrowebService.cidadeGuaibaData().subscribe(
    (data: any) => {
      this.parseData(data);
      this.getLastValues();
      this.buildChart();
    });
}

getLastValues() {
  const index = this.cidadeGuaibaData.length;
  if (index === 0) { return; }
  this.lastRiverDate = this.cidadeGuaibaData[index-1].getLastDate();
  this.lastRiverValue = this.cidadeGuaibaData[index-1].getRiverLevel();
}

buildChart(){
  const labels: string[] = [];
  const values: number[] = [];
  for (let i = 0; i < this.cidadeGuaibaData.length; i++){
    const item = this.cidadeGuaibaData[i];
    labels.push(item.getLastDate().toLocaleString());
    values.push(item.getRiverLevel());
  }
  this.lineChartData = { labels, datasets: [{ data: values, label: 'Estação Cais Mauá C6', fill: false, borderColor: '#3e95cd' }] };
}
}