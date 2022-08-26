import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistoriquePlainteService {
  private baseUrl = environment.baseUrl ;
  constructor(private http: HttpClient) { }

  public getHistorique(dId:any){
    return this.http.get(`${this.baseUrl}/historique/${dId}`)
  }

}
