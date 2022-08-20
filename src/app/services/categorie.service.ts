import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private baseUrl = environment.baseUrl ;
  constructor(private http: HttpClient) { }

  public categories(){
    return this.http.get(`${this.baseUrl}/categorie/`);
  }

  public getcategorie(dId: any){
    return this.http.get(`${this.baseUrl}/categorie/${dId}`)
  }

  public ajouter(categorie:any){
    return this.http.post(`${this.baseUrl}/categorie/`,categorie);
  }

  public modifier(categorie: any){
    return this.http.put(`${this.baseUrl}/categorie/`, categorie);
  }

  public supprimer(did: any){
    return this.http.delete(`${this.baseUrl}/categorie/${did}`);
  }
}
