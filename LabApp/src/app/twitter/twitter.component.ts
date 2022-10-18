import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../twitter.service';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {

  constructor(public twiObj : TwitterService) { }

  public PlugTwitter(){
    return this.twiObj.showtwitterNotification();
  }

  ngOnInit(): void {
  }

}
