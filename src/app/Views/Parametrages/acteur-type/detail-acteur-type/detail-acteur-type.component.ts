import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActeurTypeService } from 'src/app/services/acteur-type.service';

@Component({
  selector: 'app-detail-acteur-type',
  templateUrl: './detail-acteur-type.component.html',
  styleUrls: ['./detail-acteur-type.component.css']
})
export class DetailActeurTypeComponent implements OnInit {

  actType: any;
  private acteurTypeId: any;
  acteurTypeDesignationCourte:any;
  acteurTypeDesignationComplete:any;
  acteurTypeDescription:any;
  

  constructor(private _route:ActivatedRoute,private _actType:ActeurTypeService,private router: Router,private httpClient: HttpClient) { }

  fr: any=[];
  ngOnInit(): void {

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
  }

  detail(){
    this._actType.getActType(this.acteurTypeId).subscribe(
      data =>{
        this.actType = data;
        this.acteurTypeDesignationComplete = this.actType.acteurTypeDesignationComplete;
        this.acteurTypeDesignationCourte = this.actType.acteurTypeDesignationCourte;
        this.acteurTypeDescription = this.actType.acteurTypeDescription;
      }
    )
  }

}
