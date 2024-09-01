import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { FirebaseStorageService } from '../services/firebase-storage.service';

interface ProdutoComImagem {
  id: number;
  nome: string;
  categoria: string;
  preco: number;
  imagemPath?: string;
  imagem?: string;
  imagemCarregada: boolean;
}

@Component({
  selector: 'app-produto-lista',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {
  categorias: string[] = [];
  produtosPorCategoria: { [categoria: string]: ProdutoComImagem[] } = {};
  imagemPadrao = 'assets/imagem-padrao.jpg';

  constructor(
    private produtoService: ProdutoService,
    private firebaseStorage: FirebaseStorageService
  ) {}

  ngOnInit(): void {
    const produtos = this.produtoService.getProdutos();
    this.categorias = [...new Set(produtos.map(p => p.categoria))];
    this.categorias.forEach(categoria => {
      this.produtosPorCategoria[categoria] = this.produtoService.getProdutosPorCategoria(categoria).map(p => ({...p, imagemCarregada: false}));
      this.carregarImagensProdutos(this.produtosPorCategoria[categoria]);
    });
  }

  carregarImagensProdutos(produtos: ProdutoComImagem[]): void {
    produtos.forEach(produto => {
      if (produto.imagemPath) {
        this.firebaseStorage.getImageUrl(produto.imagemPath).subscribe(
          url => {
            produto.imagem = url;
            produto.imagemCarregada = true;
          },
          error => {
            console.warn(`Erro ao carregar imagem para ${produto.nome}: ${error.message}`);
            produto.imagem = this.imagemPadrao;
            produto.imagemCarregada = true;
          }
        );
      } else {
        produto.imagem = this.imagemPadrao;
        produto.imagemCarregada = true;
      }
    });
  }

  getProdutosPorCategoria(categoria: string): ProdutoComImagem[] {
    return this.produtosPorCategoria[categoria] || [];
  }

  deveExibirBotaoVerMais(categoria: string): boolean {
    return this.getProdutosPorCategoria(categoria).length > 4;
  }

  onImagemCarregada(produto: ProdutoComImagem): void {
    produto.imagemCarregada = true;
  }

  onImagemErro(produto: ProdutoComImagem): void {
    produto.imagem = this.imagemPadrao;
    produto.imagemCarregada = true;
  }
}
