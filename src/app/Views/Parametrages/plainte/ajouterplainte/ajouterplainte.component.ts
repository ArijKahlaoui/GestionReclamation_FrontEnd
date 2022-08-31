import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentService } from 'src/app/services/document.service';
import { PlainteService } from 'src/app/services/plainte.service';
import { Observable, forkJoin } from 'rxjs';
@Component({
  selector: 'app-ajouterplainte',
  templateUrl: './ajouterplainte.component.html',
  styleUrls: ['./ajouterplainte.component.css']
})
export class AjouterplainteComponent implements OnInit {
  
  //Add upload Form 
  display :any = 0;
  dataarray:any[]=[]
  
  fr: any=[];
  plainteSoumissionReference:any;

  submitted = false; 
  appelOffre: any;
  appelOffreReference:any = 1;
  
  plainte={
    plainteId:'',
    plainteObjet:'',
    plainteDescription:'',
    plainteDate:new Date(),
    plainteAoReference: {
      appelOffreReference:''
    },
    plainteSoumissionReference:{
      soumissionnaireReference:'',
      soumissionnaireNom:''
    },
    
  }

  document={  
    documentNom:'',
    historiquePlainte:{
      plainte: {
        plainteId: '',
      }
    },
  }

  form: FormGroup = new FormGroup({
    plainteObjet:new FormControl(''),
    plainteDescription:new FormControl(''),
    plainteAoReference:new FormControl(''),
    documentNom:new FormControl(''),
  })

  

 
  constructor(private _route:ActivatedRoute,private _document:DocumentService,private formBuilder: FormBuilder,private _plainte: PlainteService,private router: Router,private httpClient: HttpClient) { }

  ngOnInit(): void {
    
    
    this._plainte.getAppel(this.appelOffreReference).subscribe(data=>{
      this.appelOffre = data;
      this.plainte.plainteAoReference = this.appelOffre.appelOffreReference;
      //this.document.appeloffre = this.appelOffre.appelOffreReference;
    })

    this.form = this.formBuilder.group(
      {
        plainteObjet: [['',Validators.maxLength(254)]],
        plainteDescription: [['',Validators.maxLength(1000)]],
        plainteAoReference:{
          appelOffreReference:[['',Validators.maxLength(100)]],

        } ,
        documentNom: [['',Validators.required]],
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
    // ajouter Plainte
    this._plainte.ajouter(this.plainte).subscribe(
      (data:any)=>{
        this.plainte = data;
        this.plainte.plainteObjet= '';
        this.plainte.plainteDescription= '';
        this.plainte.plainteAoReference = {
            appelOffreReference: '',
        };
        console.log(data);
        this.router.navigate(["/ListePlainte"])
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  upload(){
    //ajouter document
    
    this._document.ajouter(this.document).subscribe(
      (data:any)=>{
        this.document = data
        this.document.documentNom='';
        this.document.historiquePlainte.plainte.plainteId = this.plainte.plainteId;
        console.log(data);
        this.router.navigate(["/ListePlainte"])
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  submitAll(){
    this.submitted = true;
    if (this.form.invalid) {
        return;
    }
    this.formSubmit();
    this.upload();
  }

onPress() {
  this.display = this.display+1;
  this.dataarray.push(this.display);
  console.log(this.dataarray) 
}


}
