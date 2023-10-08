import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ConnenctionsComponent } from './components/connenctions/connenctions.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'connections', component: ConnenctionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
