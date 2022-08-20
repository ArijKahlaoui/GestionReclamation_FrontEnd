import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Plainte } from 'src/app/models/Plainte';
import { PlainteService } from 'src/app/services/plainte.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listeplainte',
  templateUrl: './listeplainte.component.html',
  styleUrls: ['./listeplainte.component.css']
})
export class ListeplainteComponent implements OnInit {

  displayedColumns = ['plainteId','plainteSoumissionReference','plainteAoReference','plainteObjet','operations'];
  dataSource!: MatTableDataSource<Plainte>;

  soumissionnaireReference:any;
  soumissionnaire:any;


  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('matSort', { static: false }) matSort!: MatSort;

  plaintes: any[] = [];
  fr: any=[];
  plainteSoumissionReference: any;
  
  appelOffreReference:any;
  appelOffre:any
  appelOffreIntitule: any;
  constructor(private _plainte:PlainteService,private router: Router,private httpClient: HttpClient) { }

  ngOnInit(): void {

    
    this._plainte.plaintes().subscribe(
      (data:any)=>{
        this.plaintes = data;
        this.dataSource = new MatTableDataSource(this.plaintes);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.matSort;
      }
    );
      //soumissionaire
    this._plainte.getSoumissionnaire(this.soumissionnaireReference).subscribe(data=>{
      this.soumissionnaire=  data;
      this.soumissionnaireReference = this.soumissionnaire.soumissionnaireReference;
    })

    //appelOfre
    this._plainte.getAppel(this.appelOffreReference).subscribe(data=>{
      this.appelOffre = data;
      this.appelOffreReference = this.appelOffre.appelOffreReference;
      this.appelOffreIntitule = this.appelOffre.appelOffreIntitule;
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

  detail(dId:any){
    this.router.navigate(['detailPlainte', dId]);
  }
  

  validation(dId: any){
    
    this.router.navigate(['traitPlainte', dId]);
    
  }

  ajout(){
    this.router.navigate(["/ajoutPlainte"]).then(() => {
      window.location.reload();
    });
  }

}
