import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { TraitementPlainte } from 'src/app/models/TraitementPlainte';
import { PlainteService } from 'src/app/services/plainte.service';

@Component({
  selector: 'app-historique-reponse',
  templateUrl: './historique-reponse.component.html',
  styleUrls: ['./historique-reponse.component.css']
})
export class HistoriqueReponseComponent implements OnInit {
  displayedColumns = ['plainteId','plainteDate','plainteAoReference',"decision",'acteur','reponse','operations'];
  dataSource!: MatTableDataSource<TraitementPlainte>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('matSort', { static: false }) matSort!: MatSort;
  plainteId:any;

  traitements: any[] = [];
  fr: any=[];
  constructor(private _plainte:PlainteService,private _route:ActivatedRoute,private router: Router,private httpClient: HttpClient) { }
  ngOnInit(): void {

    this._route.paramMap.subscribe(
      params => {
        this.plainteId = params.get('plainteId');
      }
    );

    this._plainte.gettraitementOfPlainte(this.plainteId).subscribe(
      (data:any)=>{
        this.traitements = data;
        this.dataSource = new MatTableDataSource(this.traitements);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.matSort;
      }
    )

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
