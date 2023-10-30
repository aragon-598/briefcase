import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProfilePageComponent,
  ],
  imports: [
    CommonModule,
    PrimengModule,
    SharedModule
  ],exports:[
    ProfilePageComponent
  ]
})
export class BriefcaseModule { }
