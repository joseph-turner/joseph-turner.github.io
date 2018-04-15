import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent } from './intro/intro.component';
import { ExperienceComponent } from './experience/experience.component';
import { SideProjectsComponent } from './side-projects/side-projects.component';
import { SkillsComponent } from './skills/skills.component';
import { InterestsComponent } from './interests/interests.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'side-projects', component: SideProjectsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'interests', component: InterestsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
