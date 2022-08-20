import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandestypeService } from 'src/app/services/demandestype.service';

@Component({
  selector: 'app-modifier-type-demande',
  templateUrl: './modifier-type-demande.component.html',
  styleUrls: ['./modifier-type-demande.component.css']
})
export class ModifierTypeDemandeComponent implements OnInit {

  private demandeTypeId:any;
  type: any;
  fr: any=[];
  demandeTypeLibelle:any;
  demandeTypeAcronym:any;
  demandeTypeDescription:any;

  formEdit: FormGroup = new FormGroup({
    demandeTypeLibelle: new FormControl(''),
    demandeTypeDescription: new FormControl(''),
    demandeTypeAcronym: new FormControl(''),
  }); 
  isupdated = false; 
  constructor(private formBuilder: FormBuilder,private _route:ActivatedRoute,private router: Router,private _type:DemandestypeService,private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.isupdated = false; 

    this._route.paramMap.subscribe(
      params => {
        this.demandeTypeId = params.get('demandeTypeId');
      }
    );

    
    
    this.type = this._type.getType(this.demandeTypeId).subscribe(
      data => {
        this.type = data;
        this.demandeTypeLibelle = this.type.demandeTypeLibelle;
        this.demandeTypeDescription = this.type.demandeTypeDescription;
        this.demandeTypeAcronym = this.type.demandeTypeAcronym;
      }
    );

    this.httpClient.get("assets/fr.json").subscribe(data =>{
      console.log(data);
      this.fr = data;
    });

    this.formEdit = this.formBuilder.group(
      {
        demandeTypeLibelle: ['', [Validators.required,Validators.maxLength(45)]],
        demandeTypeAcronym: ['',[Validators.required,Validators.maxLength(45)]],
        demandeTypeDescription: ['',[Validators.maxLength(1000)]]
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
    this._type.modifier(this.type).subscribe(
      data =>{
          this.router.navigate(["/ListeDem"]).then(() => {
            window.location.reload();
          });
        });
  }

}
