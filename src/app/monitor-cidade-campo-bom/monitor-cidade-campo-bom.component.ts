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
  selector: 'app-monitor-cidade-campo-bom',
  standalone: true,
  templateUrl: './monitor-cidade-campo-bom.component.html',
  styleUrls: ['./monitor-cidade-campo-bom.component.css'],
  providers: [HidrowebService],
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, SBActionDescriptionComponent, NgChartsModule, SBDescriptionComponent, FormsModule, CommonModule]
})
export class MonitorCidadeCampoBomComponent implements OnInit{

  @Input() selectedDaysInterval: number = 7
  public campoBomData: RiverInfo[] = [];
  public dateValue = new Date(); 
  public lastRiverDate: Date = new Date();
  public lastRiverValue: number = 0;

    public width: string = '75%';
    public lineChartData: any = { labels: [], datasets: [{ data: [], label: 'Rio dos Sinos', fill: false, borderColor: '#3e95cd' }] };
    public lineChartOptions: any = { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: true } }, scales: { y: { title: { display: true, text: 'Metros' }, min: 0 } } };


public title: string = 'Nivel Rio dos Sinos';

constructor(private hidrowebService: HidrowebService) {}

parseData(jsonData: any){
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - this.selectedDaysInterval);
  this.campoBomData = [];
  for (const k in jsonData){
    if (!Object.prototype.hasOwnProperty.call(jsonData, k)) { continue; }
    const date = new Date(jsonData[k].horDataHora);
    if (date >= cutoff){
      const data = new RiverInfo(date,
      (jsonData[k].horNivelAdotado/100),
      jsonData[k].horEstacao);
      this.campoBomData.push(data);
    }
  }
}

ngOnInit(){
  this.hidrowebService.campoBomData().subscribe(
    (data: any) => {
      this.parseData(data);
      this.getLastValues();
      this.buildChart();
    });
}

getLastValues() {
  const index = this.campoBomData.length;
  if (index === 0) { return; }
  this.lastRiverDate = this.campoBomData[index-1].getLastDate();
  this.lastRiverValue = this.campoBomData[index-1].getRiverLevel();
}

buildChart(){
  const labels: string[] = [];
  const values: number[] = [];
  for (let i = 0; i < this.campoBomData.length; i++){
    const item = this.campoBomData[i];
    labels.push(item.getLastDate().toLocaleString());
    values.push(item.getRiverLevel());
  }
  this.lineChartData = { labels, datasets: [{ data: values, label: 'Rio dos Sinos', fill: false, borderColor: '#3e95cd' }] };
}
}