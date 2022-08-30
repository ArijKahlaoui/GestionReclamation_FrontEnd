import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentService } from 'src/app/services/document.service';
import { PlainteService } from 'src/app/services/plainte.service';

@Component({
  selector: 'app-detailplainte',
  templateUrl: './detailplainte.component.html',
  styleUrls: ['./detailplainte.component.css']
})
export class DetailplainteComponent implements OnInit {

  acteurs = ["ADM","USER"];
  acteur:any;
  result =false;

  displayedColumns = ['idDocument','documentNom','Lien'];
  dataSource!: MatTableDataSource<Document>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('matSort', { static: false }) matSort!: MatSort;

  documents:any[]=[];

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
  } | any;
  demandesType:{
    demandeTypeId:any,
  }|any;
  constructor(private _document:DocumentService,private _route:ActivatedRoute,private _plainte:PlainteService,private router: Router,private httpClient: HttpClient) { }

  ngOnInit(): void {

    this.acteur = this.acteurs[Math.floor(Math.random() * this.acteurs.length)];
    if(this.acteur == "USER"){
      this.result = true;
    }

    this._route.paramMap.subscribe(
      params => {
        this.plainteId = params.get('plainteId');
      }
    );

    //liste of documents
    this._document.documents().subscribe(
      (data:any)=>{
      this.documents=data;
      this.dataSource = new MatTableDataSource(this.documents);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
    })

    //get plainte
    this.plainte = this._plainte.getPlainte(this.plainteId).subscribe(
      data => {
        this.plainte = data;
        this.plainteId = this.plainte.plainteId;
        this.plainteObjet = this.plainte.plainteObjet;
        this.plainteDescription = this.plainte.plainteDescription;
        this.plainteDate = this.plainte.plainteDate;
        this.plainteAoReference = this.plainte.plainteAoReference;
        this.plainteSoumissionReference=this.plainte.plainteSoumissionReference;
        this.demandesType=this.plainte.demandesType;
      }
    );

    

      //get Soumissionnaire
    this._plainte.getSoumissionnaire(this.plainte.plainteSoumissionReference).subscribe(data=>{
      this.soumissionnaire=  data;
      
    })

    this.httpClient.get("assets/fr.json").subscribe(data =>{
      console.log(data);
      this.fr = data;
    });
  }

  ngAfterViewInit() {    
    this.dataSource.sort = this.matSort;
  }
  
  detail(){
    this._plainte.getPlainte(this.plainteId).subscribe(
      data => {
        this.plainte = data;
        this.plainteId = this.plainte.plainteId;
        this.plainteObjet = this.plainte.plainteObjet;
        this.plainteDescription = this.plainte.plainteDescription;
        this.plainteDate = this.plainte.plainteDate;
        this.plainteAoReference = this.plainte.plainteAoReference;
        this.plainteSoumissionReference=this.plainte.plainteSoumissionReference;
        this.demandesType=this.plainte.demandesType;
      });
      
  }

  validation(dId: any){

    
    this.router.navigate(['traitPlainte', dId]);
    
  }

  historique(dId: any){
    
    this.router.navigate(['historiquePlainte/'+this.plainte.demandesType.demandeTypeId, dId]);
    
  }

}
