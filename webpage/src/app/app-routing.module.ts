import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ConnenctionsComponent } from './components/connenctions/connenctions.component';
import { MainComponent } from './components/main/main.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  { path: 'about', component: AboutComponent},
  { path: 'connections', component: ConnenctionsComponent},
  { path: 'portfolio', component: PortfolioComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
