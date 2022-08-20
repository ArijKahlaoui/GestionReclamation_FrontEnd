import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DecisionService } from 'src/app/services/decision.service';

@Component({
  selector: 'app-detail-decision',
  templateUrl: './detail-decision.component.html',
  styleUrls: ['./detail-decision.component.css']
})
export class DetailDecisionComponent implements OnInit {

  fr: any=[];
  decision: any;
  private decisionId:any;
  decisionLibelle:any;
  decisionDescription:any;

  constructor(private _route:ActivatedRoute,private _decision:DecisionService,private router: Router,private httpClient: HttpClient) { }

  ngOnInit(): void {

    this._route.paramMap.subscribe(
      params => {
        this.decisionId = params.get('decisionId');
      }
    );

    this.decision = this._decision.getDecision(this.decisionId).subscribe(
      data => {
        this.decision = data;
        this.decisionLibelle = this.decision.decisionLibelle;
        this.decisionDescription = this.decision.decisionDescription;
      }
    );


    this.httpClient.get("assets/fr.json").subscribe(data =>{
      console.log(data);
      this.fr = data;
    });
  }


  detail(){
    this._decision.getDecision(this.decisionId).subscribe(
      data =>{
        this.decision = data;
        this.decisionLibelle = this.decision.decisionLibelle;
        this.decisionDescription = this.decision.decisionDescription;
      }
    )
  }

}
