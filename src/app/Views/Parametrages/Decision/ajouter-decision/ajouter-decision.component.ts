import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DecisionService } from 'src/app/services/decision.service';

@Component({
  selector: 'app-ajouter-decision',
  templateUrl: './ajouter-decision.component.html',
  styleUrls: ['./ajouter-decision.component.css']
})
export class AjouterDecisionComponent implements OnInit {

  fr: any=[];
  decision={
    decisionLibelle:'',
    decisionDescription:'',
  }

  form: FormGroup = new FormGroup({
    decisionLibelle:new FormControl(''),
    decisionDescription:new FormControl(''),

  })

  submitted = false; 

  constructor(private formBuilder: FormBuilder,private _decision: DecisionService,private router: Router,private httpClient: HttpClient) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group(
      {
        decisionLibelle: [['',Validators.required,Validators.maxLength(45)]],
        decisionDescription: [['',Validators.maxLength(1000)]]
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
    this._decision.ajouter(this.decision).subscribe(
      (data:any)=>{
        this.decision.decisionLibelle = '';
        this.decision.decisionDescription= '';
        console.log(data);
        this.router.navigate(["/ListeDec"])
      },
      (error)=>{
        console.log(error);
      })
  }

}
