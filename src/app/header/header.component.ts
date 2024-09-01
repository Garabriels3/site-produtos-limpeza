import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header>
      <nav>
        <a [routerLink]="['/']" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
          <i class="fas fa-home"></i> Home
        </a>
        <a [routerLink]="['/catalogo']" routerLinkActive="active">Catálogo</a>
        <!-- Adicione mais links conforme necessário -->
      </nav>
    </header>
  `,
  styles: [`
    header {
      background-color: #f8f9fa;
      padding: 1rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    nav {
      display: flex;
      justify-content: center;
      gap: 2rem;
    }
    a {
      color: #007bff;
      text-decoration: none;
      font-weight: bold;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: background-color 0.3s ease;
      display: flex;
      align-items: center;
    }
    a:hover, a.active {
      background-color: #007bff;
      color: white;
    }
    i {
      margin-right: 0.5rem;
    }
  `]
})
export class HeaderComponent {}
