import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SkilksPageComponent } from './pages/skilks-page/skilks-page.component';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';
import { SocialMediaPageComponent } from './pages/social-media-page/social-media-page.component';
import { EducationPageComponent } from './pages/education-page/education-page.component';
import { BriefCaseRoutingModule } from './briefcase-routing.module';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { MessageService } from 'primeng/api';



@NgModule({
  declarations: [
    ProfilePageComponent,
    LayoutPageComponent,
    SkilksPageComponent,
    ExperiencePageComponent,
    SocialMediaPageComponent,
    EducationPageComponent,
    ProjectsPageComponent,
  ],
  imports: [
    BriefCaseRoutingModule,
    CommonModule,
    PrimengModule,
    SharedModule
  ],exports:[
    ProfilePageComponent
  ],
  providers:[
    MessageService
  ]
})
export class BriefcaseModule { }
