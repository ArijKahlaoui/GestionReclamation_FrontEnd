import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DocumentCategorieService } from 'src/app/services/document-categorie.service';

@Component({
  selector: 'app-ajouter-document-categorie',
  templateUrl: './ajouter-document-categorie.component.html',
  styleUrls: ['./ajouter-document-categorie.component.css']
})
export class AjouterDocumentCategorieComponent implements OnInit {

  fr: any=[];
  categorie={
    documentCategorieLibelle:'',
    documentCategorieLibelleAr:'',
    documentCategorieDescription:'',
    documentCategorieDescriptionAr:''
  }

  form: FormGroup = new FormGroup({
    documentCategorieLibelle:new FormControl(''),
    documentCategorieLibelleAr:new FormControl(''),
    documentCategorieDescription:new FormControl(''),
    documentCategorieDescriptionAr:new FormControl(''),
  })

  submitted = false; 
  constructor(private _docCat:DocumentCategorieService,private formBuilder: FormBuilder,private router: Router,private httpClient: HttpClient) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group(
      {
        documentCategorieLibelle: [['',Validators.required,Validators.maxLength(50)]],
        documentCategorieLibelleAr: [['',Validators.required,Validators.maxLength(50)]],
        documentCategorieDescription: [['',Validators.maxLength(1000)]],
        documentCategorieDescriptionAr: [['',Validators.maxLength(1000)]]
      },
    );

    this.httpClient.get("assets/fr.json").subscribe(data =>{
      console.log(data);
      this.fr = data;
    });
  }

  get f(){  
    return this.form.controls;  
  } 

  formSubmit(){
    this.submitted = true;
    if (this.form.invalid) {
        return;
    }
    this._docCat.ajouter(this.categorie).subscribe(
      (data:any)=>{
        this.categorie.documentCategorieLibelle = '';
        this.categorie.documentCategorieLibelleAr = '';
        this.categorie.documentCategorieDescription= '';
        this.categorie.documentCategorieDescriptionAr= '';
        console.log(data);
        this.router.navigate(["/ListeDocCat"])
      },
      (error)=>{
        console.log(error);
      })
  }
}
