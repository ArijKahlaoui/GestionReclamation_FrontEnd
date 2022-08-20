import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ActeurType } from 'src/app/models/ActeurType';
import { ActeurTypeService } from 'src/app/services/acteur-type.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-acteur-type',
  templateUrl: './liste-acteur-type.component.html',
  styleUrls: ['./liste-acteur-type.component.css']
})
export class ListeActeurTypeComponent implements OnInit {

  displayedColumns = ['acteurTypeId','acteurTypeDesignationComplete', 'acteurTypeDesignationCourte', 'acteurTypeDescription', 'operations'];
  dataSource!: MatTableDataSource<ActeurType>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('matSort', { static: false }) matSort!: MatSort;

  actTypes: any[] = [];
  fr: any=[];
  constructor(private _actType:ActeurTypeService,private router: Router,private httpClient: HttpClient) { }


  ngOnInit(): void {

    this._actType.acteursType().subscribe(
      (data:any)=>{
        this.actTypes=data;
        this.dataSource = new MatTableDataSource(this.actTypes);
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
    this.router.navigate(['detailAct', dId]);
  }

  supp(dId: any){
    Swal.fire({
      icon: "info",
      title: "Êtes-vous sûr de vouloir supprimer ce type Acteur?",
      confirmButtonText: 'Oui',
      confirmButtonColor: "rgb(189,8,28)",
      cancelButtonText: "Non",
      showCancelButton: true,
    })
    .then(
      (result)=>{
        if(result.isConfirmed){
          this._actType.supprimer(dId).subscribe(
            (data)=>{
              this.actTypes = this.actTypes.filter((actType) => actType.acteurTypeId != dId);
              window.location.reload();
            });
        }    
      }
    )
    
  }

  modif(id: any){
    this.router.navigate(['modifAct', id]);
  }

  ajout(){
    this.router.navigate(["/ajoutAct"]).then(() => {
      window.location.reload();
    });
  }

}
