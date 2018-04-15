import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IntroComponent } from './intro/intro.component';
import { ExperienceComponent } from './experience/experience.component';
import { SideProjectsComponent } from './side-projects/side-projects.component';
import { SkillsComponent } from './skills/skills.component';
import { InterestsComponent } from './interests/interests.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RandomItemPipe } from './not-found/random-item.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ExperienceComponent,
    SideProjectsComponent,
    SkillsComponent,
    InterestsComponent,
    ContactComponent,
    HeaderComponent,
    NotFoundComponent,
    RandomItemPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
