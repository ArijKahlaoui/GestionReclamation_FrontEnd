import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historique-reponse',
  templateUrl: './historique-reponse.component.html',
  styleUrls: ['./historique-reponse.component.css']
})
export class HistoriqueReponseComponent implements OnInit {

  constructor() { }
  displayedColumns = ['plainteId','plainteDate','plainteAoReference','plainteObjet','operations'];
  ngOnInit(): void {
  }

}
