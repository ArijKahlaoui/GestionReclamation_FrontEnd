import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActeurTypeService } from 'src/app/services/acteur-type.service';

@Component({
  selector: 'app-ajouter-acteur-type',
  templateUrl: './ajouter-acteur-type.component.html',
  styleUrls: ['./ajouter-acteur-type.component.css']
})
export class AjouterActeurTypeComponent implements OnInit {

  fr: any=[];
  actType={
    acteurTypeDesignationCourte: '',
    acteurTypeDesignationComplete:'',
    acteurTypeDescription:'',
    }

  form: FormGroup = new FormGroup({
    acteurTypeDesignationCourte: new FormControl(''),
    acteurTypeDesignationComplete: new FormControl(''),
    acteurTypeDescription: new FormControl(''),
  }); 
  submitted = false; 
  constructor(private formBuilder: FormBuilder,private _actType:ActeurTypeService,private router: Router,private httpClient: HttpClient) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group(
      {
        acteurTypeDesignationCourte: [[Validators.required,Validators.maxLength(45)]],
        acteurTypeDesignationComplete: [[Validators.required,Validators.maxLength(45)]],
        acteurTypeDescription: [[Validators.maxLength(1000)]]
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
    this._actType.ajouter(this.actType).subscribe(
      (data:any)=>{
        this.actType.acteurTypeDesignationComplete='';
        this.actType.acteurTypeDesignationCourte='';
        this.actType.acteurTypeDescription='';
        console.log(data);
        this.router.navigate(["/ListeAct"])
      },
      (error)=>{
        console.log(error);
      });
      
  }

}
