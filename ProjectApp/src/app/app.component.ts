import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'ProjectApp';

  public loginArray : any = [];
  public user : string = "";
  public password : string = "";
  public status:string= "";

  public Login(ctrl:any){
    if(this.user != "" && this.password != ""){
      this.status = 'Login Successfull...!'
    }else{
      this.status = 'Please Login again'
    }
  }
}
