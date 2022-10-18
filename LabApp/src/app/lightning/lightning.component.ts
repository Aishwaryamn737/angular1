import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightning',
  templateUrl: './lightning.component.html',
  styleUrls: ['./lightning.component.css']
})
export class LightningComponent implements OnInit {

  
  public click1(statusDiv:any){
    statusDiv.style = "background-color:black; color:pink";
    statusDiv.innerText = "Do not distrub me...!!!"
  }

  public over(statusDiv:any){
    statusDiv.style = "background-color:yellow";
  }

  public out(statusDiv:any){
    statusDiv.style = "background-color:grey";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
