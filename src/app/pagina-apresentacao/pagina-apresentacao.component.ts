import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirebaseStorageService } from '../services/firebase-storage.service';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

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
  styleUrls: ['./pagina-apresentacao.component.css']
})
export class PaginaApresentacaoComponent implements OnInit {
  historiaLoja: HistoriaItem[] = [
    { 
      imagem: 'loja/inicio_de_tudo.png', 
      titulo: 'O Início de Tudo', 
      descricao: 'Nossa jornada começou com um sonho e muita determinação.'
    },
    { 
      imagem: 'loja/frente_loja_fechado.png', 
      titulo: 'Nossa Primeira Loja', 
      descricao: 'Com muito esforço, abrimos as portas da nossa primeira loja física.'
    },
    { 
      imagem: 'loja/frente_atual_loja.png', 
      titulo: 'Crescimento e Expansão', 
      descricao: 'Ao longo dos anos, crescemos e nos tornamos referência na região.'
    },
    { 
      imagem: 'loja/dentro_loja.png',
      titulo: 'Nossa Loja Hoje', 
      descricao: 'Hoje, oferecemos uma experiência única de compra para nossos clientes.'
    }
  ];

  historiaLojaComUrls$: Observable<HistoriaItem[]> = new Observable<HistoriaItem[]>();

  constructor(private firebaseStorage: FirebaseStorageService) {}

  ngOnInit() {
    this.carregarImagensFirebase();
  }

  carregarImagensFirebase() {
    const observables = this.historiaLoja.map(item => 
      this.firebaseStorage.getImageUrl(item.imagem).pipe(
        map(url => ({ ...item, imageUrl: url }))
      )
    );

    this.historiaLojaComUrls$ = forkJoin(observables);
  }
}
