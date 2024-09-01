import { ComponentFixture, TestBed } from '@angular/core/testing';
// Remova esta linha:
// import { RouterModule } from '@angular/router';
import { ProdutoListaComponent } from './produto-lista.component';

describe('ProdutoListaComponent', () => {
  let component: ProdutoListaComponent;
  let fixture: ComponentFixture<ProdutoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
