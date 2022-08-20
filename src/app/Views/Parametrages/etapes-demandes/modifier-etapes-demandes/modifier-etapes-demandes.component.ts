import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActeurTypeService } from 'src/app/services/acteur-type.service';
import { DemandestypeService } from 'src/app/services/demandestype.service';
import { EtapesDemandesService } from 'src/app/services/etapes-demandes.service';

@Component({
  selector: 'app-modifier-etapes-demandes',
  templateUrl: './modifier-etapes-demandes.component.html',
  styleUrls: ['./modifier-etapes-demandes.component.css']
})
export class ModifierEtapesDemandesComponent implements OnInit {

  fr: any=[];
  etape:any;
  private etapesDemandesId:any;
  etapesDemandesLibelle: any; 
  etapesDemandesDescription: any;
  etapesDemandesDelaiExecution: any;
  etapesDemandesOrdre:  any;
  etapesDemandesEnvoiAlerte:  any;
  etapesDemandesDureeJour: any; 
  etapesDemandesDureeJourOuvrable:any;
  etapesDemandesActeurType: any;
  etapesDemandesType: any;

  acteursType: any;
  
  type:any;
  demandeTypeId:any;

  formEdit: FormGroup = new FormGroup({
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

  isupdated = false;
  etapeOfType: any;
  
  constructor(private _Etape:EtapesDemandesService,private _type:DemandestypeService,private _acteur:ActeurTypeService,private formBuilder: FormBuilder,private _route:ActivatedRoute,private router: Router,private httpClient: HttpClient) { 
    
  }

  ngOnInit(): void {
    this.isupdated = false;

    //1) récupération de l'id de l'etape à modifier
    this._route.paramMap.subscribe(
      params => {
        this.etapesDemandesId = params.get('etapesDemandesId');
      }
    );
    
    
    //   2) récupération de l'objet etape avec cet id
    this.etape = this._Etape.getEtape(this.etapesDemandesId).subscribe(
      data=>{
        this.etape = data;
        
        this.etapesDemandesLibelle= this.etape.etapesDemandesLibelle;
        this.etapesDemandesDescription= this.etape.etapesDemandesDescription;
        this.etapesDemandesDelaiExecution = this.etape.etapesDemandesDelaiExecution;
        this.etapesDemandesOrdre = this.etape.etapesDemandesOrdre;
        this.etapesDemandesEnvoiAlerte = this.etape.etapesDemandesEnvoiAlerte;
        this.etapesDemandesDureeJour = this.etape.etapesDemandesDureeJour;
        this.etapesDemandesDureeJourOuvrable = this.etape.etapesDemandesDureeJourOuvrable;
        this.etapesDemandesActeurType = this.etape.etapesDemandesActeurType;
        
    })  
    
    
    //      récupération DemandeType detail
    this.demandeTypeId = this._route.snapshot.params['demandeTypeId'];

    this._type.getType(this.demandeTypeId).subscribe(
      data =>{
        this.type = data;
        
      }
    );

   //      récupération tous les acteurs
    this._acteur.acteursType().subscribe(
      (data:any)=>{
        this.acteursType = data;
        
        console.log(this.acteursType);
      },
      (error)=>{
        console.log(error);
      }
    );

    this._Etape.getEtapeOfType(this.demandeTypeId).subscribe(
      (data:any)=>{
        this.etapeOfType=data;
      }
    )

    this.formEdit = this.formBuilder.group(
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
    return this.formEdit.controls;  
  } 

  onListDrop(event: CdkDragDrop<any>) {
    // Swap the elements around
    console.log(`Moving item from ${event.previousIndex} to index ${event.currentIndex}`)
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    console.log(`event.container ${event.container.data}`)
    //this.dataSource.data = clonedeep(this.dataSource.data);
  }

 updateEtp(){
  if (this.formEdit.invalid) {
    return;
  }
  
  this._Etape.modifier(this.etape).subscribe(
    data=>{
      
      this.router.navigate(["/detailDem/"+this.demandeTypeId]).then(() => {
      //window.location.reload();
    })
    },
    (error)=>{
      console.log(error)
    })
  }
}
