import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemandestypeService {

  private baseUrl = environment.baseUrl ;
  constructor(private http: HttpClient) { }

  public types(){
    return this.http.get(`${this.baseUrl}/demande/`);
  }

  public getType(dId: any){
    return this.http.get(`${this.baseUrl}/demande/${dId}`)
  }

  public ajouter(demande:any){
    return this.http.post(`${this.baseUrl}/demande/`,demande);
  }

  public modifier(type: any){
    return this.http.put(`${this.baseUrl}/demande/`, type);
  }

  public supprimer(did: any){
    return this.http.delete(`${this.baseUrl}/demande/${did}`);
  }
}
