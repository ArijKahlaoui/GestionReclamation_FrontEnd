import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { HistoriquePlainte } from 'src/app/models/HistoriquePlainte';
import { EtapesDemandesService } from 'src/app/services/etapes-demandes.service';
import { PlainteService } from 'src/app/services/plainte.service';

@Component({
  selector: 'app-historique-plainte',
  templateUrl: './historique-plainte.component.html',
  styleUrls: ['./historique-plainte.component.css']
})
export class HistoriquePlainteComponent implements OnInit {

  displayedColumns = ['HistoriqueDemandeDateDebutPrevue','HistoriqueDemandeDateFinPrevue','HistoriqueDemandeDateDebutReelle','HistroriqueDemandeDateFinReelle','HistoriqueDemandeDureePrevue','HistoriqueDemandeDureeReelle'];
  dataSource!: MatTableDataSource<HistoriquePlainte>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('matSort', { static: false }) matSort!: MatSort;
  
  etapeOfType:any[]=[];
  fr:any=[];

  plainte:any;
  plainteId:any;
  demandeTypeId:any;
  constructor(private _plainte:PlainteService,private _etape:EtapesDemandesService,private router: Router,private httpClient: HttpClient,private _router:ActivatedRoute) { }

  ngOnInit(): void {

    this._router.paramMap.subscribe(
      params => {
        this.plainteId = params.get('plainteId');
      }
    );

    this._plainte.getPlainte(this.plainteId).subscribe(
      data=>{
        this.plainte = data;
       console.log(this.plainte);
      }
    )

    this._etape.getEtapeOfType(this.plainte.demandesType).subscribe(
      (data:any)=>{
        this.etapeOfType = data;
        
        console.log(this.etapeOfType);
      },
      (error)=>{
        console.log(error);
      })
  }

}
