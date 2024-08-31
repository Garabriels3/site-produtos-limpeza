import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-lista',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {
  categorias: string[] = [];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    const produtos = this.produtoService.getProdutos();
    this.categorias = [...new Set(produtos.map(p => p.categoria))];
  }

  getProdutosPorCategoria(categoria: string): any[] {
    return this.produtoService.getProdutosPorCategoria(categoria);
  }

  deveExibirBotaoVerMais(categoria: string): boolean {
    return this.getProdutosPorCategoria(categoria).length > 4;
  }
}
