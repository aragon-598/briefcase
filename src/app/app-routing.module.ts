import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:() => import('./briefcase/briefcase.module').then(m=> m.BriefcaseModule)
  },
  {
    path:'',
    redirectTo:'',
    pathMatch:'full'
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  exports: [RouterModule]
})
export class AppRoutingModule { }
