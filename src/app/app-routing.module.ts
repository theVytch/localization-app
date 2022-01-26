import { CidadeReadSearchComponent } from './components/views/cidade/cidade-read-search/cidade-read-search.component';
import { CidadeReadComponent } from './components/views/cidade/cidade-read/cidade-read.component';
import { EstadoReadComponent } from './components/views/estado/estado-read/estado-read.component';
import { HomeComponent } from './components/views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'estados',
    component: EstadoReadComponent
  },
  {     
    path:'estados/:id_est/cidades',
    component: CidadeReadComponent
  },
  {      
    path:'estados/:id_est/cidades/:nome_cid',
    component: CidadeReadSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
