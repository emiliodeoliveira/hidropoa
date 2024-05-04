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
  private baseUrl = 'https://saladesituacao.rs.gov.br/api/station/ana/87450004';

  constructor() {}

  guaibaData() {
    return this.http.get(this.baseUrl, httpOptions);
  }
}
