import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { never, NEVER } from 'rxjs';
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
  constructor(private _decision:DecisionService,private _route:ActivatedRoute,private _plainte:PlainteService,private router: Router,private httpClient: HttpClient) { }
  submitted = false; 
  ngOnInit(): void {

    
    this._route.paramMap.subscribe(
      params => {
        this.plainteId = params.get('plainteId');
      }
    );

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

  reponse(dId:any){
    this.router.navigate(['historiqueRep', dId]);
  }

  
}
