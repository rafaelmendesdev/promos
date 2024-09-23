import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CampanhaComponent } from './campanha/campanha.component';
import { DetalhesCampanhaComponent } from './detalhes-campanha/detalhes-campanha.component';
import { DetalhesOptinCampanhaComponent } from './detalhes-optin-campanha/detalhes-optin-campanha.component';

const routes: Routes = [
  { path: 'campanha', component: CampanhaComponent },
  { path: 'detalhes-optin-campanha', component: DetalhesOptinCampanhaComponent },
  { path: 'detalhes-campanha', component: DetalhesCampanhaComponent },
  { path: '', redirectTo: '/campanha', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
