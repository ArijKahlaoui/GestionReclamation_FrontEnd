import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort,Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { DemandeType } from 'src/app/models/DemandeType';
import { DemandestypeService } from 'src/app/services/demandestype.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-type-demande',
  templateUrl: './liste-type-demande.component.html',
  styleUrls: ['./liste-type-demande.component.css']
})
export class ListeTypeDemandeComponent implements OnInit {

  displayedColumns = ['demandeTypeId','demandeTypeLibelle', 'demandeTypeAcronym', 'demandeTypeDescription', 'operations'];
  dataSource!: MatTableDataSource<DemandeType>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('matSort', { static: false }) matSort!: MatSort;

  types: any[] = [];
  fr: any=[];
  constructor(private _type:DemandestypeService,private router: Router,private httpClient: HttpClient) { }

  ngOnInit(): void {

    this._type.types().subscribe(
      (data:any)=>{
        this.types=data;
        this.dataSource = new MatTableDataSource(this.types);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.matSort;
      });

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
  
  detail(dId:any){
    this.router.navigate(['detailDem', dId]);
  }

  supp(dId: any){
    Swal.fire({
      icon: "info",
      title: "Êtes-vous sûr de vouloir supprimer ce Type Demande?",
      confirmButtonText: 'Oui',
      confirmButtonColor: "rgb(189,8,28)",
      cancelButtonText: "Non",
      showCancelButton: true,
    })
    .then(
      (result)=>{
        if(result.isConfirmed){
          this._type.supprimer(dId).subscribe((data)=>{
              this.types = this.types.filter((type) => type.demandeTypeId != dId);
              window.location.reload();
          });
        }
      }
    )
  }

  modif(id: any){
    this.router.navigate(['modifDem', id]);
  }

  ajout(){
    this.router.navigate(["/ajoutDem"]).then(() => {
      window.location.reload();
    });
  }

  

}
