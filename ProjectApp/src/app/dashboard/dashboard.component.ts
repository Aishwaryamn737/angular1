import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public webApiData: any = "";

  public AccessWebApi(){
    var request = this.http.get("https://localhost:7093/DB/Product/get").toPromise();
    request.then((data)=> this.webApiData = data);
  }

  public webApiData2: any = "";

  public AccessWebApi2(){
    var request = this.http.get("https://localhost:7093/DB/Product/get").toPromise();
    request.then((data)=> this.webApiData2 = data);
  }
  constructor(public http : HttpClient) { }
  
  // constructor(){}

  ngOnInit(): void {
  }

}
