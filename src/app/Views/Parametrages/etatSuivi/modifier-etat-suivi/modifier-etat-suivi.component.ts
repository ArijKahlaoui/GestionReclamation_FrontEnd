import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EtatSiuviService } from 'src/app/services/etat-siuvi.service';

@Component({
  selector: 'app-modifier-etat-suivi',
  templateUrl: './modifier-etat-suivi.component.html',
  styleUrls: ['./modifier-etat-suivi.component.css']
})
export class ModifierEtatSuiviComponent implements OnInit {

  private etatSuiviId:any;
  etat: any;
  fr: any=[];
  etatSuiviLibelle:any;
  etatSuiviDescription:any;

  formEdit: FormGroup = new FormGroup({
    etatSuiviLibelle: new FormControl(''),
    etatSuiviDescription: new FormControl(''),
  }); 
  isupdated = false;
  constructor(private formBuilder: FormBuilder,private _route:ActivatedRoute,private router: Router,private _etat:EtatSiuviService,private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.isupdated = false;

    this._route.paramMap.subscribe(
      params => {
        this.etatSuiviId = params.get('etatSuiviId');
      }
    );

    this.httpClient.get("assets/fr.json").subscribe(data =>{
      console.log(data);
      this.fr = data;
    });

    this.etat = this._etat.getEtat(this.etatSuiviId).subscribe(
      data => {
        this.etat = data;
        this.etatSuiviLibelle = this.etat.etatSuiviLibelle;
        this.etatSuiviDescription = this.etat.etatSuiviDescription;
      }
    );

    this.formEdit = this.formBuilder.group(
      {
        etatSuiviLibelle: ['', [Validators.required,Validators.maxLength(45)]],
        etatSuiviDescription: ['',[Validators.maxLength(1000)]]
      },
    );
  }

  get f(){  
    return this.formEdit.controls;  
  }  
  update(){
    if (this.formEdit.invalid) {
      return;
    }
    this._etat.modifier(this.etat).subscribe(
      data =>{
          this.router.navigate(["/ListeEtat"])
        });
  }
}
