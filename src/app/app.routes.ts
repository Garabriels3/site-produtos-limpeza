import { Routes } from '@angular/router';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { CategoriaDetalhesComponent } from './categoria-detalhes/categoria-detalhes.component';

export const routes: Routes = [
  { path: '', component: ProdutoListaComponent },
  { path: 'categoria/:categoria', component: CategoriaDetalhesComponent },
];
