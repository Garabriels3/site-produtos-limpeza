import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirebaseStorageService } from '../services/firebase-storage.service';
import { Observable, forkJoin, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

interface HistoriaItem {
  imagem: string;
  titulo: string;
  descricao: string;
  imageUrl?: string;
}

@Component({
  selector: 'app-pagina-apresentacao',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pagina-apresentacao.component.html',
  styleUrls: ['./pagina-apresentacao.component.css'],
  animations: [
    trigger('staggerFadeIn', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateX(-50px)' }),
          stagger('300ms', [
            animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
          ]),
        ], { optional: true }),
      ]),
    ]),
  ],
})
export class PaginaApresentacaoComponent implements OnInit {
  historiaLoja: HistoriaItem[] = [
    { 
      imagem: 'loja/inicio_de_tudo.png', 
      titulo: 'O Início de Tudo', 
      descricao: 'A loja iniciou suas atividades de forma simples, com um pequeno estoque de produtos de limpeza em casa na frente de nossa casa na calçada.'
    },
    { 
      imagem: 'loja/frente_loja_fechado.png', 
      titulo: 'Nossa Primeira Loja', 
      descricao: 'Graças a Deus, conseguimos reformar a frente de nossa casa onde ganhamos mais espaço para vender nossos produtos de limpeza.'
    },
    { 
      imagem: 'loja/frente_atual_loja.png', 
      titulo: 'Crescimento e Renovação', 
      descricao: 'Passmamos por mais algumas reformas para deixar tudo bem organizado'
    },
    { 
      imagem: 'loja/dentro_loja.png',
      titulo: 'Nossa Loja Hoje', 
      descricao: 'Atualmente, somos referência em produtos de limpeza na região.'
    }
  ];

  historiaLojaComUrls$: Observable<HistoriaItem[]>;
  imagemPadrao = 'assets/imagem-padrao.jpg';
  animationTrigger = false;

  constructor(private firebaseStorage: FirebaseStorageService) {
    this.historiaLojaComUrls$ = this.carregarImagensFirebase().pipe(
      tap(() => {
        setTimeout(() => {
          this.animationTrigger = true;
        }, 100);
      })
    );
  }

  ngOnInit() {}

  carregarImagensFirebase(): Observable<HistoriaItem[]> {
    const observables = this.historiaLoja.map(item => 
      this.firebaseStorage.getImageUrl(item.imagem).pipe(
        map(url => ({ ...item, imageUrl: url })),
        catchError(error => {
          console.error(`Erro ao carregar imagem para ${item.titulo}:`, error);
          return of({ ...item, imageUrl: this.imagemPadrao });
        })
      )
    );

    return forkJoin(observables);
  }
}
