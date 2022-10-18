import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Svc1Service {

  public showFbNotification() : string[]{
    return ["New friend request", "Your post was liked by 1000 friends", 
    "Your friend posted for the first time"];
  }

  public getCommentsForPost(postId : number){
    
  }


  constructor() { }
}
