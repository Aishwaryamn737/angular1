import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {
  public user : string = "";
  public password : string="";
  public userArray:any = [];
  public userArray2:any = [];
  public status:string="";
  public status2:string="";

  public AddUser(ctrl:any){
    this.userArray.push({user:this.user, password:this.password});
    var lastIndex = this.userArray.length-1;
    var lastItem = this.userArray[lastIndex];
    if(lastItem.user != "" && lastItem.password != ""){
    this.status = `User Name ${lastItem.user} added to the List successfully.`;
  }else{
    this.status = `please try again`;
  }
    ctrl.style = "color:white; font-style:italic; background-color:#7cb342;"
  }

  // public Login(ctrl:any){
  //   this.userArray.push({user:this.user, password:this.password});
  //   var lastIndex = this.userArray.length-1;
  //   var lastItem = this.userArray[lastIndex];
  //   this.status2 = `${lastItem.user} added successfully!!`;
  //   ctrl.style = "color:green; font-style:italic; background-color:yellow;"
  // }
  public Login(ctrl:any){
    this.userArray2.push({user2:this.user, password2:this.password});
    var lastIndex2 = this.userArray2.length-1;
    var lastItem2 = this.userArray2[lastIndex2];
    if(lastItem2.user2 != ""  && lastItem2.password2 != ""){
    // if(user3.value != null  && password3.value != null){
      // this.status2 = `${this.user} logged in successfully!!`;
      this.status2 = `Login successfull!!`;
    }else{
      this.status2 = `Please login again..!!`;
    }
    ctrl.style = "color:white; font-style:italic; background-color:#7cb342;"
  }


  constructor() { }

  ngOnInit(): void {
  }

}
