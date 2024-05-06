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
export class SaladesituacaoServiceService {
  private http = inject(HttpClient)
  private guaibaUrl = 'https://saladesituacao.rs.gov.br/api/station/ana/87450004';
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