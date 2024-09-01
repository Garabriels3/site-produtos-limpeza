import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { ScrollService } from '../scroll.service';
import { FirebaseStorageService } from '../services/firebase-storage.service';

@Component({
  selector: 'app-produto-detalhe',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit {
  produto: any;
  imagemUrl: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,  
    private produtoService: ProdutoService,
    private scrollService: ScrollService,
    private firebaseStorage: FirebaseStorageService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.produto = this.produtoService.getProdutoById(id);
      if (this.produto && this.produto.imagemPath) {
        this.carregarImagem(this.produto.imagemPath);
      }
      this.scrollService.scrollToTop();
    });
  }

  carregarImagem(path: string): void {
    this.firebaseStorage.getImageUrl(path).subscribe(
      url => this.imagemUrl = url,
      error => {
        console.error('Erro ao carregar a imagem:', error);
        this.imagemUrl = null; // Isso fará com que a imagem padrão seja exibida
      }
    );
  }

  encomendar() {
    const mensagem = encodeURIComponent(`Olá, gostaria de encomendar o produto ${this.produto.nome}.`);
    window.open(`https://wa.me/5511957692714?text=${mensagem}`, '_blank');
  }

  voltarParaCatalogo() {
    this.router.navigate(['catalogo'], { replaceUrl: true });
  }
}
