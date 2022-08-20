import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActeurTypeService {

  private baseUrl = environment.baseUrl ;
  constructor(private http: HttpClient) { }

  public acteursType(){
    return this.http.get(`${this.baseUrl}/acteurType/`);
  }

  public getActType(dId: any){
    return this.http.get(`${this.baseUrl}/acteurType/${dId}`)
  }

  public ajouter(type:any){
    return this.http.post(`${this.baseUrl}/acteurType/`,type);
  }

  public modifier(type: any){
    return this.http.put(`${this.baseUrl}/acteurType/`, type);
  }

  public supprimer(did: any){
    return this.http.delete(`${this.baseUrl}/acteurType/${did}`);
  }
}
