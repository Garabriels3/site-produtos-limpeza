import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { FirebaseStorageService } from '../services/firebase-storage.service';

@Component({
  selector: 'app-produto-lista',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {
  categorias: string[] = [];
  produtosPorCategoria: { [categoria: string]: any[] } = {};
  imagemPadrao = 'assets/imagem-padrao.jpg'; // Caminho para a imagem padrão cinza

  constructor(
    private produtoService: ProdutoService,
    private firebaseStorage: FirebaseStorageService
  ) {}

  ngOnInit(): void {
    const produtos = this.produtoService.getProdutos();
    this.categorias = [...new Set(produtos.map(p => p.categoria))];
    this.categorias.forEach(categoria => {
      this.produtosPorCategoria[categoria] = this.produtoService.getProdutosPorCategoria(categoria);
      this.carregarImagensProdutos(this.produtosPorCategoria[categoria]);
    });
  }

  carregarImagensProdutos(produtos: any[]): void {
    produtos.forEach(produto => {
      if (produto.imagemPath) {
        this.firebaseStorage.getImageUrl(produto.imagemPath).subscribe(
          url => {
            produto.imagem = url; // Mudamos de imagemUrl para imagem
            console.log(`Imagem carregada para ${produto.nome}: ${url}`);
          },
          error => {
            console.warn(`Erro ao carregar imagem para ${produto.nome}: ${error.message}`);
            produto.imagem = this.imagemPadrao;
          }
        );
      } else {
        produto.imagem = this.imagemPadrao;
      }
    });
  }

  getProdutosPorCategoria(categoria: string): any[] {
    return this.produtosPorCategoria[categoria] || [];
  }

  deveExibirBotaoVerMais(categoria: string): boolean {
    return this.getProdutosPorCategoria(categoria).length > 4;
  }
}
