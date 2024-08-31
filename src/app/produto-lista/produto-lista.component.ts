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
  produtos: any[] = [];
  categorias: string[] = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtos = this.produtoService.getProdutos();
    this.categorias = [...new Set(this.produtos.map(p => p.categoria))];
  }

  getProdutosPorCategoria(categoria: string): any[] {
    return this.produtoService.getProdutosPorCategoria(categoria);
  }
}
