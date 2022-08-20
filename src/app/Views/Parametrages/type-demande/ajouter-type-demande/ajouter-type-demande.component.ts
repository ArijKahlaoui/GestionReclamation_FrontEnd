import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DemandestypeService } from 'src/app/services/demandestype.service';

@Component({
  selector: 'app-ajouter-type-demande',
  templateUrl: './ajouter-type-demande.component.html',
  styleUrls: ['./ajouter-type-demande.component.css']
})
export class AjouterTypeDemandeComponent implements OnInit {

 
  fr: any=[];
  demande={
    demandeTypeLibelle:'',
    demandeTypeDescription:'',
    demandeTypeAcronym:'',
  }

  form: FormGroup = new FormGroup({
    demandeTypeLibelle: new FormControl(''),
    demandeTypeDescription: new FormControl(''),
    demandeTypeAcronym: new FormControl(''),
  }); 
  submitted = false; 
  constructor(private formBuilder: FormBuilder,private _demande:DemandestypeService,private router: Router,private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        demandeTypeLibelle: [[Validators.required,Validators.maxLength(45)]],
        demandeTypeAcronym: [[Validators.required,Validators.maxLength(45)]],
        demandeTypeDescription: [[Validators.maxLength(1000)]]
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
    this._demande.ajouter(this.demande).subscribe(
      (data:any)=>{
        this.demande.demandeTypeLibelle='';
        this.demande.demandeTypeDescription='';
        this.demande.demandeTypeAcronym='';
        console.log(data);
        this.router.navigate(["/ListeDem"])
      },
      (error)=>{
        console.log(error);
      });
      
  }
}
