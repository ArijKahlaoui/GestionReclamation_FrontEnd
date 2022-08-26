import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { HistoriquePlainte } from 'src/app/models/HistoriquePlainte';
import { EtapesDemandesService } from 'src/app/services/etapes-demandes.service';
import { HistoriquePlainteService } from 'src/app/services/historique-plainte.service';
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
  size:any;
  fr:any=[];

  plainte:any;
  plainteId:any;
  plainteDate:any;
  demandeTypeId:any;
  historiques:any[]=[];
  constructor(private _historique: HistoriquePlainteService,private _plainte:PlainteService,private _etape:EtapesDemandesService,private router: Router,private httpClient: HttpClient,private _router:ActivatedRoute) { }

  ngOnInit(): void {

    this._router.paramMap.subscribe(
      params => {
        this.plainteId = params.get('plainteId');
      }
    );

    this._router.paramMap.subscribe(
      params => {
        this.demandeTypeId = params.get('demandeTypeId');
      }
    );

    this._plainte.getPlainte(this.plainteId).subscribe(
      data=>{
        this.plainte = data;
        this.plainteDate = this.plainte.plainteDate;
       console.log(this.plainte);
       console.log(this.plainte.demandeType.demandeTypeId)
      }
    )

    this._etape.getEtapeOfType(this.demandeTypeId).subscribe(
      (data:any)=>{
        this.etapeOfType = data;
        //this.size = this.etapeOfType.length;
        console.log(this.etapeOfType);
        //console.log(this.size);
      },
      (error)=>{
        console.log(error);
      })

    this._historique.getHistorique(this.plainteId).subscribe(
      (data:any)=>{
        this.historiques = data;
        console.log(data);
        this.dataSource = new MatTableDataSource(this.historiques);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.matSort;
      })

    

    this.httpClient.get("assets/fr.json").subscribe(data =>{
      console.log(data);
      this.fr = data;
    });
  }

  ngAfterViewInit() {    
    this.dataSource.sort = this.matSort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
