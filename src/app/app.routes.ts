import { RouterModule, Routes } from '@angular/router';
import { VoluntariadoComponent } from './voluntariado/voluntariado.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { MonitorCidadeGuaibaComponent } from './monitor-cidade-guaiba/monitor-cidade-guaiba.component';
import { MonitorCidadeCampoBomComponent } from './monitor-cidade-campo-bom/monitor-cidade-campo-bom.component';
import { MonitorSaoLeopoldoComponent } from './monitor-sao-leopoldo/monitor-sao-leopoldo.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'cidade-guaiba',
        component: MonitorCidadeGuaibaComponent
    },
    {
        path: 'campo-bom',
        component: MonitorCidadeCampoBomComponent
    },
    {
        path: 'sao-leopoldo',
        component: MonitorSaoLeopoldoComponent
    },
    {
        path: 'voluntariado',
        component: VoluntariadoComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
