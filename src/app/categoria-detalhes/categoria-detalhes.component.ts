import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { ScrollService } from '../scroll.service';
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
  selector: 'app-categoria-detalhes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './categoria-detalhes.component.html',
  styleUrls: ['./categoria-detalhes.component.css']
})
export class CategoriaDetalhesComponent implements OnInit {
  categoria: string = '';
  produtos: ProdutoComImagem[] = [];
  imagemPadrao = 'assets/imagem-padrao.jpg';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService,
    private scrollService: ScrollService,
    private firebaseStorage: FirebaseStorageService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoria = params['categoria'];
      this.produtos = this.produtoService.getProdutosPorCategoria(this.categoria)
        .map(p => ({...p, imagemCarregada: false}));
      this.carregarImagensProdutos();
      this.scrollService.scrollToTop();
    });
  }

  carregarImagensProdutos(): void {
    this.produtos.forEach(produto => {
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

  voltarParaCatalogo() {
    this.router.navigate(['/catalogo'], { replaceUrl: true });
  }

  onImagemCarregada(produto: ProdutoComImagem): void {
    produto.imagemCarregada = true;
  }

  onImagemErro(produto: ProdutoComImagem): void {
    produto.imagem = this.imagemPadrao;
    produto.imagemCarregada = true;
  }
}