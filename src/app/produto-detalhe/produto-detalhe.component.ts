import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-produto-detalhe',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit {
  produto: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,  // Corrigido de RouterModule para Router
    private produtoService: ProdutoService,
    private scrollService: ScrollService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.produto = this.produtoService.getProdutoById(id);
      this.scrollService.scrollToTop();
    });
  }

  encomendar() {
    const mensagem = encodeURIComponent(`Olá, gostaria de encomendar o produto ${this.produto.nome}.`);
    window.open(`https://wa.me/5511957692714?text=${mensagem}`, '_blank');
  }

  voltarParaCatalogo() {
    this.router.navigate(['/'], { replaceUrl: true });
  }
}
