import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Decision } from 'src/app/models/Decision';
import { DecisionService } from 'src/app/services/decision.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-decision',
  templateUrl: './liste-decision.component.html',
  styleUrls: ['./liste-decision.component.css']
})
export class ListeDecisionComponent implements OnInit {

  displayedColumns = ['decisionId','decisionLibelle','decisionDescription', 'operations'];

  dataSource!: MatTableDataSource<Decision>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('matSort', { static: false }) matSort!: MatSort;

  decisions: any[] = [];
  fr: any=[];
  constructor(private _decision:DecisionService,private router: Router,private httpClient: HttpClient) { }

  ngOnInit(): void {

    this._decision.decisions().subscribe(
      (data:any)=>{
        this.decisions=data;
        this.dataSource = new MatTableDataSource(this.decisions);
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
    this.router.navigate(['detailDec', dId]);
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
          this._decision.supprimer(dId).subscribe((data)=>{
          this.decisions = this.decisions.filter((decision) => decision.decisionId != dId);
          window.location.reload();
      });
        }
      }
    )
    
  }

  modif(id: any){
    this.router.navigate(['modifDec', id]);
  }

  ajout(){
    this.router.navigate(["/ajoutDec"]).then(() => {
      window.location.reload();
    });
  }

}
