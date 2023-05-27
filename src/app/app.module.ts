import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/header/nav-bar/nav-bar.component';
import { BannerComponent } from './components/header/banner/banner.component';
import { HeaderComponent } from './components/header/header.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from "@angular/common";
import { EditSkillsComponent } from './components/skills/edit-skills/edit-skills.component';
import { AddSkillsComponent } from './components/skills/add-skills/add-skills.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FooterComponent } from './components/footer/footer.component';
import { PruebasComponent } from './pruebas/pruebas.component';
//import { PortfolioService } from './services/portfolio.service';
//import { PortfolioComponent } from './components/portfolio/portfolio.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    HeaderComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    LoginComponent,
    EditSkillsComponent,
    AddSkillsComponent,
    AboutMeComponent,
    FooterComponent,
    PruebasComponent,
    //PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    NgCircleProgressModule.forRoot({})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
