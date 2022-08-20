import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActeurTypeService } from 'src/app/services/acteur-type.service';

@Component({
  selector: 'app-modifier-acteur-type',
  templateUrl: './modifier-acteur-type.component.html',
  styleUrls: ['./modifier-acteur-type.component.css']
})
export class ModifierActeurTypeComponent implements OnInit {

  fr: any=[];
  actType: any;
  private acteurTypeId: any;
  acteurTypeDesignationCourte:any;
  acteurTypeDesignationComplete:any;
  acteurTypeDescription:any;

  formEdit: FormGroup = new FormGroup({
    acteurTypeDesignationCourte: new FormControl(''),
    acteurTypeDesignationComplete: new FormControl(''),
    acteurTypeDescription: new FormControl(''),
  }); 
  isupdated = false; 
  constructor(private formBuilder: FormBuilder,private _route:ActivatedRoute,private router: Router,private _actType:ActeurTypeService,private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.isupdated = false; 

    this._route.paramMap.subscribe(
      params => {
        this.acteurTypeId = params.get('acteurTypeId');
      }
    );

    this.httpClient.get("assets/fr.json").subscribe(data =>{
      console.log(data);
      this.fr = data;
    });
    
    this.actType = this._actType.getActType(this.acteurTypeId).subscribe(
      data => {
        this.actType = data;
        this.acteurTypeDesignationComplete = this.actType.acteurTypeDesignationComplete;
        this.acteurTypeDesignationCourte = this.actType.acteurTypeDesignationCourte;
        this.acteurTypeDescription = this.actType.acteurTypeDescription;
      }
    );

    this.formEdit = this.formBuilder.group(
      {
        acteurTypeDesignationComplete: ['', [Validators.required,Validators.maxLength(45)]],
        acteurTypeDesignationCourte: ['',[Validators.required,Validators.maxLength(45)]],
        acteurTypeDescription: ['',[Validators.maxLength(1000)]]
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
    this._actType.modifier(this.actType).subscribe(
      data =>{
          this.router.navigate(["/ListeAct"]).then(() => {
            window.location.reload();
          });
        });
  }

}
