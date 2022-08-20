import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandestypeService } from 'src/app/services/demandestype.service';
import { EtapesDemandesService } from 'src/app/services/etapes-demandes.service';

@Component({
  selector: 'app-detail-etapes-demandes',
  templateUrl: './detail-etapes-demandes.component.html',
  styleUrls: ['./detail-etapes-demandes.component.css']
})
export class DetailEtapesDemandesComponent implements OnInit {

  fr: any=[];
  acteursType: any;
  type:any;
  etape: any;
  private demandeTypeId:any;
  private etapesDemandesId:any;
  etapesDemandesLibelle: any; 
  etapesDemandesDescription: any;
  etapesDemandesDelaiExecution: any;
  etapesDemandesOrdre:  any;
  etapesDemandesEnvoiAlerte:  any;
  etapesDemandesDureeJour: any; 
  etapesDemandesDureeJourOuvrable:any;
  etapesDemandesActeurType: any;
  
  
  constructor(private _route:ActivatedRoute,private _etape:EtapesDemandesService,private _type:DemandestypeService,private router: Router,private httpClient: HttpClient) { }

  ngOnInit(): void {

    this.demandeTypeId = this._route.snapshot.params['demandeTypeId'];

    this._type.getType(this.demandeTypeId).subscribe(
      data =>{
        this.type = data;
      }
    );
    this._route.paramMap.subscribe(
      params => {
        this.etapesDemandesId = params.get('etapesDemandesId');
      }
    );

    this.etape= this._etape.getEtape(this.etapesDemandesId).subscribe(
      data=>{
        this.etape = data;
      }
    );

    

    this.httpClient.get("assets/fr.json").subscribe(data =>{
      console.log(data);
      this.fr = data;
    });
  }

  ajoutEtp(id: any){
    this.router.navigate(['ajoutEtp', id]);
  }

  modif(id:any){
    this.router.navigate(['modifEtp/'+this.demandeTypeId, id])
  }

}
