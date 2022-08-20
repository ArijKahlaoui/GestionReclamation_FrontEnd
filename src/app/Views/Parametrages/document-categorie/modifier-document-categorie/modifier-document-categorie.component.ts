import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentCategorieService } from 'src/app/services/document-categorie.service';

@Component({
  selector: 'app-modifier-document-categorie',
  templateUrl: './modifier-document-categorie.component.html',
  styleUrls: ['./modifier-document-categorie.component.css']
})
export class ModifierDocumentCategorieComponent implements OnInit {

  private documentCategorieId:any
  categorie: any;
  fr: any=[];
  documentCategorieLibelle:any
  documentCategorieLibelleAr:any
  documentCategorieDescription:any
  documentCategorieDescriptionAr:any

  formEdit: FormGroup = new FormGroup({
    documentCategorieLibelle:new FormControl(''),
    documentCategorieLibelleAr:new FormControl(''),
    documentCategorieDescription:new FormControl(''),
    documentCategorieDescriptionAr:new FormControl(''),
  })
  isupdated = false;
  constructor(private _docCat:DocumentCategorieService,private _route:ActivatedRoute,private formBuilder: FormBuilder,private router: Router,private httpClient: HttpClient) { }


  ngOnInit(): void {

    this.isupdated = false;

    this._route.paramMap.subscribe(
      params => {
        this.documentCategorieId = params.get('documentCategorieId');
      }
    );

    this.httpClient.get("assets/fr.json").subscribe(data =>{
      console.log(data);
      this.fr = data;
    });

    this.formEdit = this.formBuilder.group({
      documentCategorieLibelle: [['',Validators.required,Validators.maxLength(50)]],
      documentCategorieLibelleAr: [['',Validators.required,Validators.maxLength(50)]],
      documentCategorieDescription: [['',Validators.maxLength(1000)]],
      documentCategorieDescriptionAr: [['',Validators.maxLength(1000)]]
    })

    this.categorie = this._docCat.getdocCategorie(this.documentCategorieId).subscribe(data => {
      this.categorie = data;
      this.documentCategorieLibelle = this.categorie.decisionLibelle;
      this.documentCategorieLibelleAr = this.categorie.decisionLibelleAr;
      this.documentCategorieDescription = this.categorie.decisionDescription;
      this.documentCategorieDescriptionAr = this.categorie.decisionDescriptionAr;
    })
  }

  get f(){  
    return this.formEdit.controls;  
  }  

  update(){
    if (this.formEdit.invalid) {
      return;
    }
    this._docCat.modifier(this.categorie).subscribe(
      data =>{
          this.router.navigate(["/ListeDocCat"])
        });
  }

}
