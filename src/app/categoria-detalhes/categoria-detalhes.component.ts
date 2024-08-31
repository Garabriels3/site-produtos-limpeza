import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-categoria-detalhes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './categoria-detalhes.component.html',
  styleUrls: ['./categoria-detalhes.component.css']
})
export class CategoriaDetalhesComponent implements OnInit {
  categoria: string = '';
  produtos: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private scrollService: ScrollService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoria = params['categoria'];
      this.produtos = this.produtoService.getProdutosPorCategoria(this.categoria);
      this.scrollService.scrollToTop();
    });
  }
}