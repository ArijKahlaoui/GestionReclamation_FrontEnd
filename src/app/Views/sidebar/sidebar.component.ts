import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router,private httpClient: HttpClient) { }
  sidebar: any;
  fr: any=[];
  ngOnInit(): void {
    this.httpClient.get("assets/fr.json").subscribe(data =>{
      console.log(data);
      this.fr = data;
    });
  }

  toggleClick() {
    this.sidebar.toggle();
  }

  closeClick() {
    this.sidebar.hide();
  }

  panelOpenState = false;

}
