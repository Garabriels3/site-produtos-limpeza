import { Component } from '@angular/core';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProdutoListaComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nascimento Produtos de Limpeza';
}
