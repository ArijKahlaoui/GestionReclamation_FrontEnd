import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EtapesDemandesService {

  private baseUrl = environment.baseUrl ;
  constructor(private http: HttpClient) { }

  public etapes(){
    return this.http.get(`${this.baseUrl}/etapeDemande/`);
  }

  public getEtape(dId: any){
    return this.http.get(`${this.baseUrl}/etapeDemande/${dId}`)
  }

  public getEtapeOfType(dId: any){
    return this.http.get(`${this.baseUrl}/etapeDemande/type/${dId}`)
  }

  public getEtapeOfOrder(dId: any){
    return this.http.get(`${this.baseUrl}/etapeDemande/order/${dId}`)
  }
  public ajouter(etape:any){
    return this.http.post(`${this.baseUrl}/etapeDemande/`,etape);
  }

  public modifier(etape: any){
    return this.http.put(`${this.baseUrl}/etapeDemande/`, etape);
  }

  public supprimer(did: any){
    return this.http.delete(`${this.baseUrl}/etapeDemande/${did}`);
  }
}
