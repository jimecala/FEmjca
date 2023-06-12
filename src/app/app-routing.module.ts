import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';

const routes: Routes = [
  //CAMBIAR CUANDO HAGA EL LOGIN:
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pruebas', component: PruebasComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
