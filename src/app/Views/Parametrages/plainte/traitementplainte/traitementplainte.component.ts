import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder, } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DecisionService } from 'src/app/services/decision.service';
import { DocumentService } from 'src/app/services/document.service';
import { PlainteService } from 'src/app/services/plainte.service';

@Component({
  selector: 'app-traitementplainte',
  templateUrl: './traitementplainte.component.html',
  styleUrls: ['./traitementplainte.component.css']
})
export class TraitementplainteComponent implements OnInit {

  
  decisions:any;
  soumissionnaireReference:any;
  soumissionnaireNom:any;
  soumissionnaire:any;

  fr: any=[];
  plainte: any;
  plainteId:any;
  plainteObjet:any;
  plainteDescription:any;
  plainteDate:any;
  plainteAoReference:any;
  plainteSoumissionReference:{
    soumissionnaireReference: any;
    soumissionnaireNom: any;
  } | any
  display :any = 0;

  dataarray:any[]=[];

  //AJOUT TRAITEMENT
  traitement={
    reponse:'',
    decision:{
      decisionId:''
    },
    plainte:{
      plainteId:''
    }
  }

  form: FormGroup = new FormGroup({
    traitementId: new FormControl(''),
    reponse: new FormControl(''),
    decision:new FormControl(''),
    plainte:new FormControl(''),
  })

  constructor(private formBuilder: FormBuilder,private _decision:DecisionService,private _route:ActivatedRoute,private _plainte:PlainteService,private router: Router,private httpClient: HttpClient) { }
  submitted = false; 
  ngOnInit(): void {

    this._route.paramMap.subscribe(
      params => {
        this.plainteId = params.get('plainteId');
      }
    );

    this.traitement.plainte.plainteId = this.plainteId;

    this._decision.decisions().subscribe(data=>{
      this.decisions= data;
    })

    this.plainte = this._plainte.getPlainte(this.plainteId).subscribe(
      data => {
        this.plainte = data;
        this.plainteId = this.plainte.plainteId;
        this.plainteObjet = this.plainte.plainteObjet;
        this.plainteDescription = this.plainte.plainteDescription;
        this.plainteDate = this.plainte.plainteDate;
        this.plainteAoReference = this.plainte.plainteAoReference;
        this.plainteSoumissionReference=this.plainte.plainteSoumissionReference;
      }
    );

    this._plainte.getSoumissionnaire(this.plainte.plainteSoumissionReference).subscribe(data=>{
      this.soumissionnaire=  data;
      
    });


    this.form = this.formBuilder.group({ 
      reponse: ['', [Validators.maxLength(1000)]],
      decision:{
        decisionId:[''],
      } ,
      plainte: {
        plainteId:[''],
      }
    })

    this.httpClient.get("assets/fr.json").subscribe(data =>{
      console.log(data);
      this.fr = data;
    });
  }

  onPress() {
    this.display = this.display+1;
    this.dataarray.push(this.display);
    console.log(this.dataarray) 
  }

  get f(){  
    return this.form.controls;  
  }

  formSubmit(){
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this._plainte.ajouterTraitement(this.traitement).subscribe(
      data=>{
        this.traitement.reponse = '';
        this.traitement.decision.decisionId='';
        this.traitement.plainte.plainteId ='';

        this.router.navigate(["/historiqueRep/"+this.plainteId])
      }
    )
  }

  
}
