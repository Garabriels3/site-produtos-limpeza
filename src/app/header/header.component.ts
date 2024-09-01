import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Nascimento Produtos de Limpeza e Higiene em Geral';

  constructor(private router: Router) {}

  get isHomePage(): boolean {
    return this.router.url === '/';
  }
}
