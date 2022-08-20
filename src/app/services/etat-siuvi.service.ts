import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EtatSiuviService {

  private baseUrl = environment.baseUrl ;
  constructor(private http: HttpClient) { }

  public Etats(){
    return this.http.get(`${this.baseUrl}/etat/`);
  }

  public getEtat(dId: any){
    return this.http.get(`${this.baseUrl}/etat/${dId}`)
  }

  public ajouter(etat:any){
    return this.http.post(`${this.baseUrl}/etat/`,etat);
  }

  public modifier(etat: any){
    return this.http.put(`${this.baseUrl}/etat/`, etat);
  }

  public supprimer(did: any){
    return this.http.delete(`${this.baseUrl}/etat/${did}`);
  }
}
