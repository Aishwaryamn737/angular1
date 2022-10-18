import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingsComponent } from './bindings/bindings.component';
import { FilterWordComponent } from './filter-word/filter-word.component';
import { GreetComponent } from './greet/greet.component';
import { LightningComponent } from './lightning/lightning.component';
import { TwitterComponent } from './twitter/twitter.component';
import { UseHttp1Component } from './use-http1/use-http1.component';


const routes: Routes = [
  {path:"greet",component:GreetComponent},
  {path:"bindings", component:BindingsComponent},
  {path:"lightning", component:LightningComponent},
  {path:"filterWord", component:FilterWordComponent},
  {path:"twitter", component:TwitterComponent},
  {path: "http", component:UseHttp1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
