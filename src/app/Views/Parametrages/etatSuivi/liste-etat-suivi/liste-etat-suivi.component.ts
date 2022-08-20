import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EtatSuivi } from 'src/app/models/EtatSuivi';
import { EtatSiuviService } from 'src/app/services/etat-siuvi.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-etat-suivi',
  templateUrl: './liste-etat-suivi.component.html',
  styleUrls: ['./liste-etat-suivi.component.css']
})
export class ListeEtatSuiviComponent implements OnInit {

  displayedColumns = ['etatSuiviId','etatSuiviLibelle','etatSuiviDescription', 'operations'];
  dataSource!: MatTableDataSource<EtatSuivi>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('matSort', { static: false }) matSort!: MatSort;

  etats: any[] = [];
  fr: any=[];
  constructor(private _etat:EtatSiuviService,private router: Router,private httpClient: HttpClient) { }

  ngOnInit(): void {

    this._etat.Etats().subscribe(
      (data:any)=>{
        this.etats=data;
        this.dataSource = new MatTableDataSource(this.etats);
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
    this.router.navigate(['detailEtat', dId]);
  }

  supp(dId: any){
    Swal.fire({
      icon: "info",
      title: "Êtes-vous sûr de vouloir supprimer cet État?",
      confirmButtonText: 'Oui',
      confirmButtonColor: "rgb(189,8,28)",
      cancelButtonText: "Non",
      showCancelButton: true,
    })
    .then(
      (result)=>{
        if(result.isConfirmed){
          this._etat.supprimer(dId).subscribe((data)=>{
            this.etats = this.etats.filter((etat) => etat.etatSuiviId != dId);
            window.location.reload();
          });
        }
      }
    )
  }

  modif(id: any){
    this.router.navigate(['modifEtat', id]);
  }

  ajout(){
    this.router.navigate(["/ajoutEtat"]).then(() => {
      window.location.reload();
    });
  }
}
