import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {
  public showtwitterNotification() : string[]{
    return ["News for you", "Aishwarya Tweeted: Peace Love and Positivity...!", 
    "Liked by James: I may not have gotten the highest but I have gotten the Lowest"];
  }

  // public getCommentsForPost(postId : number){
    
  // }

  constructor() { }
}
