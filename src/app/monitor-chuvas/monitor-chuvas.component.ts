import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { ILoadedEventArgs, ChartTheme, ChartAllModule } from '@syncfusion/ej2-angular-charts';
import { Browser } from '@syncfusion/ej2-base';
import { SBDescriptionComponent } from '../common/dp.pomponent';
import { SBActionDescriptionComponent } from '../common/adp.component';
import { SaladesituacaoServiceService } from '../saladesituacao-service.service';
import { GuaibaInfo } from '../models/guaiba-info';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-monitor-chuvas',
  standalone: true,
  templateUrl: './monitor-chuvas.component.html',
  styleUrl: './monitor-chuvas.component.css',
  providers: [SaladesituacaoServiceService],
  imports: [SBActionDescriptionComponent, ChartAllModule, SBDescriptionComponent, FormsModule]
})
export class MonitorChuvasComponent implements OnInit{

  private dataService = inject(SaladesituacaoServiceService)

  public guaibaData: GuaibaInfo[] = [];

  public primaryXAxis: Object = {
    valueType: 'DateTime',
    textStyle: { 
      fontFamily: 'Segoe UI'
    },
    edgeLabelPlacement: 'Shift',
    majorGridLines: { width: 0 },
    labelFormat: 'd/M/y HH:mm'
};

public primaryYAxis: Object = {
    title: 'Milimetros',
    minimum: 0,
    maximum: 10,
    interval: 1,
    lineStyle: { width: 0 },
    textStyle: { 
      fontFamily: 'Segoe UI'
    }, 
    majorTickLines: { width: 0 }
    
};
public chartArea: Object = {
    border: {
        width: 0
    }
};
public width: string = Browser.isDevice ? '100%' : '75%';
public circleMarker: Object = { visible: true, height: 7, width: 7 , shape: 'Circle' , isFilled: true };
public triangleMarker: Object = { visible: true, height: 6, width: 6 , shape: 'Triangle' , isFilled: true };
public diamondMarker: Object = { visible: true, height: 7, width: 7 , shape: 'Diamond' , isFilled: true };
public rectangleMarker: Object = { visible: true, height: 5, width: 5 , shape: 'Rectangle' , isFilled: true };
public pentagonMarker: Object = { visible: true, height: 7, width: 7 , shape: 'Pentagon' , isFilled: true };

public tooltip: Object = {
    enable: true
};
public legend: Object = {
    visible: true,
    enableHighlight : true,
    textStyle: { 
      fontFamily: 'Segoe UI'
    }, 
}

public load(args: ILoadedEventArgs): void {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');
};

public title: string = 'Porto Alegre';

constructor(private saladesituacaoServiceService: SaladesituacaoServiceService) {};

parseData(jsonData: any){
  for (const k in jsonData){
    const data = new GuaibaInfo(new Date(jsonData[k].date),
    jsonData[k].precipitation,
    jsonData[k].river_flow_rate,
    jsonData[k].river_level,
    jsonData[k].station_id)
    this.guaibaData.push(data)
  }   
}

ngOnInit(){
  this.dataService.guaibaData().subscribe(
    data => {
      this.parseData(data)
    }
  )}
}