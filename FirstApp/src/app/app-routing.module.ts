import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingsComponent } from './bindings/bindings.component';
import { GreetComponent } from './greet/greet.component';
import { IfComponent } from './if/if.component';
import { PipesComponent } from './pipes/pipes.component';
import { UseHttpComponent } from './use-http/use-http.component';
import { UseSvcComponent } from './use-svc/use-svc.component';

const routes: Routes = [
  {path:"greet",component:GreetComponent},
  {path:"bindings", component:BindingsComponent},
  {path:"toggle", component:IfComponent},
  {path:"pipes", component:PipesComponent},
  {path:"fbService", component:UseSvcComponent},
  {path:"http",component:UseHttpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
