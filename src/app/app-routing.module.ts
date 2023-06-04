import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EditSkillsComponent } from './components/skills/edit-skills/edit-skills.component';
import { AddSkillsComponent } from './components/skills/add-skills/add-skills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { NewExpComponent } from './components/experience/new-exp/new-exp.component';




const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'login', component: LoginComponent },
  //{path: 'editBanner/:id', component: },
  { path: 'addSkills', component: AddSkillsComponent },
  { path: 'editSkills/:id', component: EditSkillsComponent },
  //CAMBIAR CUANDO HAGA EL LOGIN:
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
  { path: 'pruebas', component: PruebasComponent },
  { path: 'newexp', component: NewExpComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
