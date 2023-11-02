import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SkilksPageComponent } from './pages/skilks-page/skilks-page.component';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';
import { EducationPageComponent } from './pages/education-page/education-page.component';
import { SocialMediaPageComponent } from './pages/social-media-page/social-media-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';

const routes: Routes = [
  {
    path:'',
    component: LayoutPageComponent,
    children:[
      {
        path:'profile',
        component:ProfilePageComponent
      },
      {
        path:'skills',
        component:SkilksPageComponent
      },
      {
        path:'experience',
        component:ExperiencePageComponent
      },
      {
        path:'education',
        component:EducationPageComponent
      },
      {
        path:'social-media',
        component:SocialMediaPageComponent
      },
      {
        path:'projects',
        component:ProjectsPageComponent
      },
      {
        path:'**',
        redirectTo:'profile'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BriefCaseRoutingModule { }
