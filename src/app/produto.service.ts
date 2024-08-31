import { Injectable } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  categoria: string;
  preco: number;
  imagem?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private produtos: Produto[] = [
    { id: 1, nome: 'Detergente Líquido', categoria: 'Limpeza Geral', preco: 2.50 },
    { id: 2, nome: 'Desinfetante', categoria: 'Limpeza Geral', preco: 5.00 },
    { id: 3, nome: 'Sabão em Pó', categoria: 'Lavanderia', preco: 8.00 },
    { id: 4, nome: 'Água Sanitária', categoria: 'Limpeza Geral', preco: 3.50 },
    { id: 5, nome: 'Limpador Multiuso', categoria: 'Limpeza Geral', preco: 4.50 },
    { id: 6, nome: 'Sabão em Barra', categoria: 'Lavanderia', preco: 2.00 },
    { id: 7, nome: 'Amaciante', categoria: 'Lavanderia', preco: 7.50 },
    { id: 8, nome: 'Limpa Vidros', categoria: 'Limpeza Específica', preco: 6.00 },
    { id: 9, nome: 'Lustra Móveis', categoria: 'Limpeza Específica', preco: 8.50 },
    { id: 10, nome: 'Esponja de Aço', categoria: 'Utensílios', preco: 1.50 },
    { id: 11, nome: 'Esponja Multiuso', categoria: 'Utensílios', preco: 2.00 },
    { id: 12, nome: 'Pano de Chão', categoria: 'Utensílios', preco: 3.00 },
    { id: 13, nome: 'Rodo', categoria: 'Utensílios', preco: 12.00 },
    { id: 14, nome: 'Vassoura', categoria: 'Utensílios', preco: 15.00 },
    { id: 15, nome: 'Limpa Alumínio', categoria: 'Limpeza Específica', preco: 4.00 },
    { id: 16, nome: 'Removedor de Limo', categoria: 'Limpeza Específica', preco: 9.00 },
    { id: 17, nome: 'Cera Líquida', categoria: 'Limpeza Específica', preco: 10.00 },
    { id: 18, nome: 'Alvejante sem Cloro', categoria: 'Lavanderia', preco: 7.00 },
    { id: 19, nome: 'Limpa Pisos', categoria: 'Limpeza Geral', preco: 5.50 },
    { id: 20, nome: 'Sacos de Lixo', categoria: 'Utensílios', preco: 3.50 },
  ];

  getProdutos(): Produto[] {
    return this.produtos;
  }

  getProdutoById(id: number): Produto | undefined {
    return this.produtos.find(produto => produto.id === id);
  }

  getProdutosPorCategoria(categoria: string): Produto[] {
    return this.produtos.filter(produto => produto.categoria === categoria);
  }
}
