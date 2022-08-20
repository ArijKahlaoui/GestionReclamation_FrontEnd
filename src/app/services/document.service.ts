import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private baseUrl = environment.baseUrl ;
  constructor(private http: HttpClient) { }

  public documents(){
    return this.http.get(`${this.baseUrl}/document/`);
  }

  public getdocument(dId: any){
    return this.http.get(`${this.baseUrl}/document/${dId}`)
  }

  public ajouter(document:any){
    return this.http.post(`${this.baseUrl}/document/`,document);
  }

  public modifier(document: any){
    return this.http.put(`${this.baseUrl}/document/`, document);
  }

  public supprimer(did: any){
    return this.http.delete(`${this.baseUrl}/document/${did}`);
  }
}
