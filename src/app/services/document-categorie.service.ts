import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentCategorieService {

  private baseUrl = environment.baseUrl ;
  constructor(private http: HttpClient) { }

  public docCategories(){
    return this.http.get(`${this.baseUrl}/documentCategory/`);
  }

  public getdocCategorie(dId: any){
    return this.http.get(`${this.baseUrl}/documentCategory/${dId}`)
  }

  public ajouter(categorie:any){
    return this.http.post(`${this.baseUrl}/documentCategory/`,categorie);
  }

  public modifier(categorie: any){
    return this.http.put(`${this.baseUrl}/documentCategory/`, categorie);
  }

  public supprimer(did: any){
    return this.http.delete(`${this.baseUrl}/documentCategory/${did}`);
  }
}
