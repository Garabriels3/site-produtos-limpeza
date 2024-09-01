import { Routes } from '@angular/router';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { CategoriaDetalhesComponent } from './categoria-detalhes/categoria-detalhes.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PaginaApresentacaoComponent } from './pagina-apresentacao/pagina-apresentacao.component';

export const routes: Routes = [
  { path: '', component: PaginaApresentacaoComponent },
  { path: 'catalogo', component: ProdutoListaComponent },
  { path: 'categoria/:categoria', component: CategoriaDetalhesComponent },
  { path: 'produto/:id', component: ProdutoDetalheComponent },
  { path: 'about-us', component: AboutUsComponent },
];
