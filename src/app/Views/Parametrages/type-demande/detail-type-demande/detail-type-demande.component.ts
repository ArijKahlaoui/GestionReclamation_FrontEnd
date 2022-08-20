import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { EtapesDemandes } from 'src/app/models/EtapesDemandes';
import { DemandestypeService } from 'src/app/services/demandestype.service';
import { EtapesDemandesService } from 'src/app/services/etapes-demandes.service';
import Swal from 'sweetalert2';
import { CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail-type-demande',
  templateUrl: './detail-type-demande.component.html',
  styleUrls: ['./detail-type-demande.component.css']
})
export class DetailTypeDemandeComponent implements OnInit {

  displayedColumns = ['etapesDemandesOrdre','etapesDemandesLibelle', 'etapesDemandesDelaiExecution', 'etapesDemandesActeurType', 'etapesDemandesDescription', 'operations'];
  dataSource!: MatTableDataSource<EtapesDemandes>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('matSort', { static: false }) matSort!: MatSort;
  @ViewChild(MatTable)
  table!: MatTable<any>;

  etapeOfType:any[]=[];
  type: any;
  private demandeTypeId:any;
  demandeTypeLibelle:any;
  demandeTypeAcronym:any;
  demandeTypeDescription:any;
  fr: any=[];
  etapesDemandesOrdre: any;
  etapes: any;
  Etapes:any;

  dtOptions: DataTables.Settings = {};
  constructor(private _etape:EtapesDemandesService,private _route:ActivatedRoute,private _type:DemandestypeService,private router: Router,private httpClient: HttpClient) { }

  
  ngOnInit(): void {

    this._route.paramMap.subscribe(
      params => {
        this.demandeTypeId = params.get('demandeTypeId');
      }
    );

    this._etape.getEtapeOfType(this.demandeTypeId).subscribe(
      (data:any)=>{
        this.etapeOfType=data;
        this.dataSource = new MatTableDataSource(this.etapeOfType);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.matSort;
      }
    )

    this.httpClient.get("assets/fr.json").subscribe(data =>{
      console.log(data);
      this.fr = data;
    });

    this.type = this._type.getType(this.demandeTypeId).subscribe(
      data => {
        this.type = data;
        this.demandeTypeLibelle = this.type.demandeTypeLibelle;
        this.demandeTypeDescription = this.type.demandeTypeDescription;
        this.demandeTypeAcronym = this.type.demandeTypeAcronym;
      }
    );
    this.getEtapes();
    this.dtOptions = {
      processing: true
    };
  }

  getEtapes() {
    this.Etapes = this._etape.getEtapeOfType(this.demandeTypeId).subscribe(etapes => {
      this.etapes = etapes;
    });
  }

  drop(event: CdkDragDrop<EtapesDemandes[]>) {
    moveItemInArray(this.etapes, event.previousIndex, event.currentIndex);
      
    this.etapes.forEach((etape:any, index:any) =>{
      etape.etapesDemandesOrdre = index + 1
      this._etape.modifier(etape).subscribe(
                  
    )});
    
    this.table.renderRows();
    //this.dataSource.data = this.dataSource.data.slice();
        
  }
  noReturnPredicate() {
    return false;
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

  detail(){
    this._type.getType(this.demandeTypeId).subscribe(
      data =>{
        this.type = data;
        this.demandeTypeLibelle = this.type.demandeTypeLibelle;
        this.demandeTypeDescription = this.type.demandeTypeDescription;
        this.demandeTypeAcronym = this.type.demandeTypeAcronym;
      }
    )
  }

  supp(did: any){
    
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
          this._etape.supprimer(did).subscribe((data)=>{
              this.etapeOfType = this.etapeOfType.filter((etapeOfType) => etapeOfType.etapesDemandesId != did);
              window.location.reload();
          });
        }
      }
    )
  }

  

  ajoutEtp(id: any){
    this.router.navigate(['ajoutEtp', id]);
  }

  modif(id:any){
    this.router.navigate(['modifEtp/'+this.demandeTypeId, id])
  }

  detailEtp(id:any){
    this.router.navigate(['detailEtp/'+this.demandeTypeId, id])
  }
  

}


