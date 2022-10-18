import { style } from '@angular/animations';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'blacklist'
})
export class BlacklistPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if(value == "stupid" || value == "idiot"){
      var value1 = "Blacklisted";
      return value1;
    }else{
      var value2 = "ok";
      return value2;
      
    }
  }

}
