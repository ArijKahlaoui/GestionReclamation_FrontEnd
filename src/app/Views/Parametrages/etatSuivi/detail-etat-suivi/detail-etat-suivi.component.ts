import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EtatSiuviService } from 'src/app/services/etat-siuvi.service';

@Component({
  selector: 'app-detail-etat-suivi',
  templateUrl: './detail-etat-suivi.component.html',
  styleUrls: ['./detail-etat-suivi.component.css']
})
export class DetailEtatSuiviComponent implements OnInit {

  fr: any=[];
  etat: any;
  private etatSuiviId:any;
  etatSuiviLibelle:any;
  etatSuiviDescription:any;
  constructor(private _route:ActivatedRoute,private _etat:EtatSiuviService,private router: Router,private httpClient: HttpClient) { }

  ngOnInit(): void {

    this._route.paramMap.subscribe(
      params => {
        this.etatSuiviId = params.get('etatSuiviId');
      }
    );

    this.httpClient.get("assets/fr.json").subscribe(data =>{
      console.log(data);
      this.fr = data;
    });

    this.etat = this._etat.getEtat(this.etatSuiviId).subscribe(
      data => {
        this.etat = data;
        this.etatSuiviLibelle = this.etat.etatSuiviLibelle;
        this.etatSuiviDescription = this.etat.etatSuiviDescription;
      }
    );
  }

  detail(){
    this._etat.getEtat(this.etatSuiviId).subscribe(
      data =>{
        this.etat = data;
        this.etatSuiviLibelle = this.etat.etatSuiviLibelle;
        this.etatSuiviDescription = this.etat.etatSuiviDescription;
      }
    )
  }
}
