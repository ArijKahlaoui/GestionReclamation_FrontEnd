import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DocumentCategorie } from 'src/app/models/DocumentCategorie';
import { DocumentCategorieService } from 'src/app/services/document-categorie.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-document-categorie',
  templateUrl: './liste-document-categorie.component.html',
  styleUrls: ['./liste-document-categorie.component.css']
})
export class ListeDocumentCategorieComponent implements OnInit {

  displayedColumns = ['documentCategorieId','documentCategorieLibelle','documentCategorieLibelleAr','documentCategorieDescription','documentCategorieDescriptionAr', 'operations'];
  dataSource!: MatTableDataSource<DocumentCategorie>;
  
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('matSort', { static: false }) matSort!: MatSort;

  docCategories: any[] = [];
  fr: any=[];
  constructor(private _docCat:DocumentCategorieService,private router: Router,private httpClient: HttpClient) { }

  ngOnInit(): void {

    this._docCat.docCategories().subscribe((data:any)=>{
      this.docCategories=data;
      this.dataSource = new MatTableDataSource(this.docCategories);
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
    this.router.navigate(['detailDocCat', dId]);
  }

  supp(dId: any){
    Swal.fire({
      icon: "info",
      title: "Êtes-vous sûr de vouloir supprimer cette Décision?",
      confirmButtonText: 'Oui',
      confirmButtonColor: "rgb(189,8,28)",
      cancelButtonText: "Non",
      showCancelButton: true,
    })
    .then(
      (result)=>{
        if(result.isConfirmed){
          this._docCat.supprimer(dId).subscribe((data)=>{
          this.docCategories = this.docCategories.filter((docCategorie) => docCategorie.documentCategorieId != dId);
          window.location.reload();
      });
        }
      }
    ) 
  }

  modif(id: any){
    this.router.navigate(['modifDocCat', id]);
  }

  ajout(){
    this.router.navigate(['ajoutDocCat']).then(() => {
      window.location.reload();
    });
  }

}
