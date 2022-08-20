import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DecisionService {

  private baseUrl = environment.baseUrl ;
  constructor(private http: HttpClient) { }

  public decisions(){
    return this.http.get(`${this.baseUrl}/decision/`);
  }

  public getDecision(dId: any){
    return this.http.get(`${this.baseUrl}/decision/${dId}`)
  }

  public ajouter(decision:any){
    return this.http.post(`${this.baseUrl}/decision/`,decision);
  }

  public modifier(decision: any){
    return this.http.put(`${this.baseUrl}/decision/`, decision);
  }

  public supprimer(did: any){
    return this.http.delete(`${this.baseUrl}/decision/${did}`);
  }
}
