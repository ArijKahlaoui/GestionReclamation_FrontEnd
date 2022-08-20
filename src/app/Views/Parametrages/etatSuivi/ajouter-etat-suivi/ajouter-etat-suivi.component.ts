import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EtatSiuviService } from 'src/app/services/etat-siuvi.service';

@Component({
  selector: 'app-ajouter-etat-suivi',
  templateUrl: './ajouter-etat-suivi.component.html',
  styleUrls: ['./ajouter-etat-suivi.component.css']
})
export class AjouterEtatSuiviComponent implements OnInit {

  fr: any=[];
  etat={
    etatSuiviLibelle:'',
    etatSuiviDescription:'',
  }

  form: FormGroup = new FormGroup({
    etatSuiviLibelle: new FormControl(''),
    etatSuiviDescription: new FormControl(''),
  });

  submitted = false; 
  constructor(private formBuilder: FormBuilder,private _etat: EtatSiuviService,private router: Router,private httpClient: HttpClient) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group(
      {
        etatSuiviLibelle: [['',Validators.required,Validators.maxLength(45)]],
        etatSuiviDescription: [['',Validators.maxLength(1000)]]
      },
    );

    this.httpClient.get("assets/fr.json").subscribe(data =>{
      console.log(data);
      this.fr = data;
    });
  }

  get f(){  
    return this.form.controls;  
  }  

  formSubmit(){
    this.submitted = true;
    if (this.form.invalid) {
        return;
    }
    this._etat.ajouter(this.etat).subscribe(
      (data:any)=>{
        this.etat.etatSuiviLibelle = '';
        this.etat.etatSuiviDescription= '';
        console.log(data);
        this.router.navigate(["/ListeEtat"])
      },
      (error)=>{
        console.log(error);
      })
  }
}
