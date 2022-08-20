import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentCategorieService } from 'src/app/services/document-categorie.service';

@Component({
  selector: 'app-detail-document-categorie',
  templateUrl: './detail-document-categorie.component.html',
  styleUrls: ['./detail-document-categorie.component.css']
})
export class DetailDocumentCategorieComponent implements OnInit {

  fr: any=[];
  categorie:any;
  private documentCategorieId:any
  documentCategorieLibelle:any
  documentCategorieLibelleAr:any
  documentCategorieDescription:any
  documentCategorieDescriptionAr:any
  constructor(private _docCat:DocumentCategorieService,private _route:ActivatedRoute,private formBuilder: FormBuilder,private router: Router,private httpClient: HttpClient) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(
      params => {
        this.documentCategorieId = params.get('documentCategorieId');
      }
    );

    this.httpClient.get("assets/fr.json").subscribe(data =>{
      console.log(data);
      this.fr = data;
    });


    this.categorie = this._docCat.getdocCategorie(this.documentCategorieId).subscribe(data => {
      this.categorie = data;
      this.documentCategorieLibelle = this.categorie.documentCategorieLibelle;
      this.documentCategorieLibelleAr = this.categorie.documentCategorieLibelleAr;
      this.documentCategorieDescription = this.categorie.documentCategorieDescription;
      this.documentCategorieDescriptionAr = this.categorie.documentCategorieDescriptionAr;
    })
  }


  detail(){
    this._docCat.getdocCategorie(this.documentCategorieId).subscribe(
      data =>{
        this.categorie = data;
        this.documentCategorieLibelle = this.categorie.documentCategorieLibelle;
      this.documentCategorieLibelleAr = this.categorie.documentCategorieLibelleAr;
      this.documentCategorieDescription = this.categorie.documentCategorieDescription;
      this.documentCategorieDescriptionAr = this.categorie.documentCategorieDescriptionAr;
      }
    )
  }

}
