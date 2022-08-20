import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlainteService {

  private baseUrl = environment.baseUrl ;
  constructor(private http: HttpClient) { }

  public plaintes(){
    return this.http.get(`${this.baseUrl}/plainte/`);
  }

  public getPlainte(dId: any){
    return this.http.get(`${this.baseUrl}/plainte/${dId}`)
  }

  public ajouter(decision:any){
    return this.http.post(`${this.baseUrl}/plainte/`,decision);
  }

  public modifier(decision: any){
    return this.http.put(`${this.baseUrl}/plainte/`, decision);
  }

  public supprimer(did: any){
    return this.http.delete(`${this.baseUrl}/plainte/${did}`);
  }

  //soumissionnaire
  public getSoumissionnaire(dId: any){
    return this.http.get(`${this.baseUrl}/soumissionnaire/${dId}`)
  }

  //appelOffre
  public getAppel(dId:any){
    return this.http.get(`${this.baseUrl}/appel/${dId}`)
  }

  public getEtapeOfType(dId: any){
    return this.http.get(`${this.baseUrl}/plainte/type/${dId}`)
  }

}
