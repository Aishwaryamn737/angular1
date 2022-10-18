import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {
    public pageName:string = "Welcome page";
    public greetMsg:string = "Welcome to our exotic destination of angular app"
  constructor() { }

  ngOnInit(): void {

  }

}
