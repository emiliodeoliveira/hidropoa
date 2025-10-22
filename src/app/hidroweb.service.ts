import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // 'X-My-Custom-Header': `${environment.API_KEY}`,
    'Access-Control-Allow-Origin': '*',
  }),
};
@Injectable({
  providedIn: 'root'
})

export class HidrowebService {
  private http = inject(HttpClient)
  private guaibaUrl = 'https://www.snirh.gov.br/hidroweb/rest/api/documento/gerarTelemetricas?codigosEstacoes=300151130&tipoArquivo=2&periodoInicial=2024-05-01T03:00:00.000Z&periodoFinal=2024-05-10T03:00:00.000Z';
  private cidadeGuaibaUrl = "https://saladesituacao.rs.gov.br/api/station/ana/87242000";
  private campoBomUrl = "https://saladesituacao.rs.gov.br/api/station/ana/87380000";
  private saoLeopoldoUrl = "https://saladesituacao.rs.gov.br/api/station/ana/87382000";

  constructor() {}

  guaibaData() {
    return this.http.get(this.guaibaUrl, httpOptions);
  }

  cidadeGuaibaData() {
    return this.http.get(this.cidadeGuaibaUrl, httpOptions);
  }

  campoBomData() {
    return this.http.get(this.campoBomUrl, httpOptions);
  }

  saoLeopoldoBomData() {
    return this.http.get(this.saoLeopoldoUrl, httpOptions);
  }

  
}