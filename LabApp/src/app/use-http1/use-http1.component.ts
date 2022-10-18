import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-use-http1',
  templateUrl: './use-http1.component.html',
  styleUrls: ['./use-http1.component.css']
})
export class UseHttp1Component implements OnInit {
  
  public users:any = [];
  public ShowUsers(){
    var request = this.http.get("https://jsonplaceholder.typicode.com/users").toPromise();
    request.then((data)=> this.users = data);
  }
  constructor(public http : HttpClient) { }

  ngOnInit(): void {
  }

}
