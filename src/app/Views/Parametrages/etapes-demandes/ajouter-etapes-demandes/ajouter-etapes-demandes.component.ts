import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActeurTypeService } from 'src/app/services/acteur-type.service';
import { DemandestypeService } from 'src/app/services/demandestype.service';
import { EtapesDemandesService } from 'src/app/services/etapes-demandes.service';

@Component({
  selector: 'app-ajouter-etapes-demandes',
  templateUrl: './ajouter-etapes-demandes.component.html',
  styleUrls: ['./ajouter-etapes-demandes.component.css']
})
export class AjouterEtapesDemandesComponent implements OnInit {

  demandeTypeId:any;
  fr: any=[];
  acteursType: any;
  

  type:any;
  etape={
    etapesDemandesLibelle: '',
    etapesDemandesDescription: '',
    etapesDemandesDelaiExecution: '',
    etapesDemandesOrdre:  '',
    etapesDemandesEnvoiAlerte:  '',
    etapesDemandesDureeJour: '', 
    etapesDemandesDureeJourOuvrable: '',
    etapesDemandesActeurType: {
      acteurTypeId: '',
      
    },
	  etapesDemandesType: {
      demandeTypeId: '',
    },
  }

  form: FormGroup = new FormGroup({
    etapesDemandesId: new FormControl(''),
    etapesDemandesLibelle: new FormControl(''),
    etapesDemandesDescription: new FormControl(''),
    etapesDemandesDelaiExecution: new FormControl(''),
    etapesDemandesOrdre: new FormControl(''),
    etapesDemandesEnvoiAlerte: new FormControl(''),
    etapesDemandesDureeJour: new FormControl(''),
    etapesDemandesDureeJourOuvrable: new FormControl(''),
    etapesDemandesActeurType:new FormControl(''),
    etapesDemandesType:new FormControl(''),
  }); 
  submitted = false; 
  etapeOfOrder: any;
  size: any;
  constructor(private formBuilder: FormBuilder,private _Etape:EtapesDemandesService,private _acteur:ActeurTypeService,private _demande:DemandestypeService,private router: Router,private httpClient: HttpClient,private _router:ActivatedRoute) { }

  ngOnInit(): void {

    this.demandeTypeId = this._router.snapshot.params['demandeTypeId'];

    this.etape.etapesDemandesType['demandeTypeId']= this.demandeTypeId;

    this._demande.getType(this.demandeTypeId).subscribe(
      data =>{
        this.type = data;
        
      }
    )

    this._acteur.acteursType().subscribe(
      (data:any)=>{
        this.acteursType = data;

        console.log(this.acteursType);
      },
      (error)=>{
        console.log(error);
      }
    )
    this.form = this.formBuilder.group(
      {
        etapesDemandesLibelle: ['', [Validators.required,Validators.maxLength(45)]],
        etapesDemandesDescription: ['',[Validators.maxLength(45)]],
        etapesDemandesDelaiExecution: ['',[Validators.required,Validators.minLength(0)]],
        etapesDemandesOrdre:['',[Validators.required,Validators.minLength(0)]],
        etapesDemandesEnvoiAlerte:[''],
        etapesDemandesDureeJourOuvrable:[''],
        etapesDemandesActeurType:{
          acteurTypeId:['',[Validators.required]],
        },
        etapesDemandesType:{
          demandeTypeId:['',[Validators.required]],
        }
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
    
    this._Etape.ajouter(this.etape).subscribe(
      (data)=>{
        this.etape.etapesDemandesLibelle = '';
        this.etape.etapesDemandesDescription = '';
        this.etape.etapesDemandesDelaiExecution = '';
        this.etape.etapesDemandesOrdre = '';
        this.etape.etapesDemandesEnvoiAlerte = '';
        this.etape.etapesDemandesDureeJour = '';
        this.etape.etapesDemandesDureeJourOuvrable = '';
        this.etape.etapesDemandesActeurType ={
          acteurTypeId:''
        },
        this.etape.etapesDemandesType= {
          demandeTypeId: ''
        },
        
        console.log(data);
        this.router.navigate(["/detailDem/"+this.demandeTypeId]);
      },
      (error)=>{
        console.log(error);
      });
  }

}
