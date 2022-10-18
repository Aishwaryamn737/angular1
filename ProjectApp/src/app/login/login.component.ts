import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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

  // public Login1(ctrl:any){
  //   this.loginArray.push({user1:this.user,password1:this.password});
  //   var lastIndex = this.loginArray.length-1;
  //   var lastItem = this.loginArray[lastIndex];
  //   if(lastItem.user1 != ""  && lastItem.password1 != ""){
  //     this.status = `Login successfull!!`;
  //   }else{
  //     this.status = `Please login again..!!`;
  //   }
  //   ctrl.style = "color:white; font-style:italic; background-color:#7cb342;"
  // }

  constructor() {
   
   }

  ngOnInit(): void {
  }

}
