import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DecisionService } from 'src/app/services/decision.service';

@Component({
  selector: 'app-modifier-decision',
  templateUrl: './modifier-decision.component.html',
  styleUrls: ['./modifier-decision.component.css']
})
export class ModifierDecisionComponent implements OnInit {

  private decisionId:any;
  decision: any;
  fr: any=[];
  decisionLibelle:any;
  decisionDescription:any;

  formEdit: FormGroup = new FormGroup({
    decisionLibelle: new FormControl(''),
    decisionDescription: new FormControl(''),
  }); 
  isupdated = false;
  constructor(private formBuilder: FormBuilder,private _route:ActivatedRoute,private router: Router,private _decision:DecisionService,private httpClient: HttpClient) { }

  ngOnInit(): void {

    this.isupdated = false;

    this._route.paramMap.subscribe(
      params => {
        this.decisionId = params.get('decisionId');
      }
    );

    this.httpClient.get("assets/fr.json").subscribe(data =>{
      console.log(data);
      this.fr = data;
    });

    this.decision = this._decision.getDecision(this.decisionId).subscribe(
      data => {
        this.decision = data;
        this.decisionLibelle = this.decision.decisionLibelle;
        this.decisionDescription = this.decision.decisionDescription;
      }
    );

    this.formEdit = this.formBuilder.group(
      {
        decisionLibelle: ['', [Validators.required,Validators.maxLength(45)]],
        decisionDescription: ['',[Validators.maxLength(1000)]]
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
    this._decision.modifier(this.decision).subscribe(
      data =>{
          this.router.navigate(["/ListeDec"])
        });
  }

}
