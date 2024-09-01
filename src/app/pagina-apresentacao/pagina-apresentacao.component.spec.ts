import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaApresentacaoComponent } from './pagina-apresentacao.component';

describe('PaginaApresentacaoComponent', () => {
  let component: PaginaApresentacaoComponent;
  let fixture: ComponentFixture<PaginaApresentacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaApresentacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaApresentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
