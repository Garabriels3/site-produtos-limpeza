import { Injectable } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  categoria: string;
  preco: number;
  imagem?: string;
  comoUsar: string;
  recomendacoes: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private produtos: Produto[] = [
    { 
      id: 1, 
      nome: 'Detergente Líquido', 
      categoria: 'Limpeza Geral', 
      preco: 2.50,
      comoUsar: 'Aplique uma pequena quantidade do produto diretamente na esponja ou no objeto a ser limpo. Esfregue suavemente e enxágue com água corrente. Para sujeiras mais difíceis, deixe o produto agir por alguns minutos antes de esfregar.',
      recomendacoes: 'Mantenha fora do alcance de crianças. Em caso de contato com os olhos, lave com água em abundância. Não ingerir. Em caso de ingestão acidental, não provoque vômito e procure um médico imediatamente.'
    },
    { 
      id: 2, 
      nome: 'Desinfetante', 
      categoria: 'Limpeza Geral', 
      preco: 5.00,
      comoUsar: 'Dilua o produto conforme as instruções do rótulo. Aplique a solução diretamente nas superfícies a serem desinfetadas. Deixe agir por 10 minutos e, se necessário, enxágue com água limpa.',
      recomendacoes: 'Use luvas ao manusear o produto. Não misture com outros produtos de limpeza. Mantenha o ambiente ventilado durante o uso. Em caso de contato com a pele ou olhos, lave com água em abundância.'
    },
    { 
      id: 3, 
      nome: 'Sabão em Pó', 
      categoria: 'Lavanderia', 
      preco: 8.00,
      comoUsar: 'Para máquinas de lavar, siga as instruções do fabricante da máquina. Para lavagem manual, dissolva o sabão em água morna antes de adicionar as roupas. Deixe de molho por 15-30 minutos antes de esfregar e enxaguar.',
      recomendacoes: 'Teste o produto em uma área pequena e discreta antes de usar em tecidos delicados ou coloridos. Não use em lã ou seda. Mantenha em local seco e fora do alcance de crianças.'
    },
    { 
      id: 4, 
      nome: 'Água Sanitária', 
      categoria: 'Limpeza Geral', 
      preco: 3.50,
      comoUsar: 'Para desinfecção de superfícies, dilua 1 copo (200ml) em 1 litro de água. Aplique a solução e deixe agir por 10 minutos. Para roupas brancas, siga as instruções do rótulo para a quantidade adequada.',
      recomendacoes: 'Use luvas e máscara ao manusear. Não misture com outros produtos, especialmente amoníaco. Mantenha o ambiente bem ventilado durante o uso. Em caso de contato com a pele ou olhos, lave imediatamente com água em abundância.'
    },
    { 
      id: 5, 
      nome: 'Limpador Multiuso', 
      categoria: 'Limpeza Geral', 
      preco: 4.50,
      comoUsar: 'Aplique o produto diretamente na superfície a ser limpa ou em um pano úmido. Esfregue suavemente e, se necessário, enxágue com água limpa. Para sujeiras mais difíceis, deixe o produto agir por alguns minutos antes de limpar.',
      recomendacoes: 'Teste em uma área pequena antes de usar em superfícies sensíveis. Não use em madeira não selada ou em eletrônicos. Mantenha fora do alcance de crianças e animais domésticos.'
    },
    {
      id: 6,
      nome: 'Amaciante de Roupas',
      categoria: 'Lavanderia',
      preco: 7.50,
      comoUsar: 'Adicione o amaciante no compartimento específico da máquina de lavar ou durante o último enxágue na lavagem manual. Use a quantidade recomendada no rótulo do produto.',
      recomendacoes: 'Não aplique diretamente sobre os tecidos. Mantenha fora do alcance de crianças. Não ingerir. Em caso de contato com os olhos, lave com água em abundância.'
    },
    {
      id: 7,
      nome: 'Limpa Vidros',
      categoria: 'Limpeza Geral',
      preco: 6.00,
      comoUsar: 'Borrife o produto diretamente na superfície de vidro e limpe com um pano macio ou papel toalha até obter brilho. Para sujeiras mais difíceis, deixe o produto agir por alguns minutos antes de limpar.',
      recomendacoes: 'Evite o contato com os olhos. Não use em superfícies quentes ou expostas ao sol. Mantenha fora do alcance de crianças.'
    },
    {
      id: 8,
      nome: 'Lustra Móveis',
      categoria: 'Limpeza Geral',
      preco: 8.50,
      comoUsar: 'Aplique uma pequena quantidade do produto em um pano macio e limpo. Passe sobre a superfície dos móveis em movimentos circulares. Deixe secar naturalmente para obter brilho.',
      recomendacoes: 'Teste em uma área pequena e discreta antes de usar. Não use em superfícies enceradas ou não envernizadas. Mantenha fora do alcance de crianças.'
    },
    {
      id: 9,
      nome: 'Removedor de Limo',
      categoria: 'Limpeza Pesada',
      preco: 9.00,
      comoUsar: 'Aplique o produto diretamente na área afetada. Deixe agir por 15-20 minutos. Esfregue com uma escova se necessário e enxágue abundantemente com água.',
      recomendacoes: 'Use luvas e óculos de proteção. Não misture com outros produtos. Mantenha o ambiente bem ventilado durante o uso. Em caso de contato com a pele, lave imediatamente com água em abundância.'
    },
    {
      id: 10,
      nome: 'Sabão de Coco em Barra',
      categoria: 'Lavanderia',
      preco: 3.00,
      comoUsar: 'Umedeça o sabão e esfregue diretamente na mancha ou área suja da roupa. Deixe agir por alguns minutos antes de lavar normalmente.',
      recomendacoes: 'Ideal para roupas delicadas e bebês. Evite o contato prolongado com a pele. Em caso de irritação, suspenda o uso e consulte um médico.'
    },
    {
      id: 11,
      nome: 'Limpa Forno',
      categoria: 'Cozinha',
      preco: 10.50,
      comoUsar: 'Com o forno frio, aplique o produto uniformemente nas superfícies internas. Deixe agir por 30 minutos a 1 hora. Limpe com uma esponja úmida e enxágue bem.',
      recomendacoes: 'Use luvas e máscara. Não use em fornos de auto-limpeza ou superfícies pintadas. Mantenha o ambiente bem ventilado. Não misture com outros produtos de limpeza.'
    },
    {
      id: 12,
      nome: 'Alvejante sem Cloro',
      categoria: 'Lavanderia',
      preco: 7.00,
      comoUsar: 'Adicione a quantidade recomendada no rótulo junto com o sabão no início do ciclo de lavagem. Para manchas, aplique diretamente e deixe agir por 5-10 minutos antes de lavar.',
      recomendacoes: 'Seguro para a maioria das roupas coloridas. Teste em uma área pequena antes de usar em tecidos delicados. Não use em lã, seda, couro ou roupas com acabamento especial.'
    },
    {
      id: 13,
      nome: 'Limpa Pisos',
      categoria: 'Limpeza Geral',
      preco: 6.50,
      comoUsar: 'Dilua o produto conforme as instruções do rótulo. Aplique a solução no piso com um pano ou mop. Não é necessário enxaguar, a menos que o piso fique com aparência pegajosa.',
      recomendacoes: 'Não use em pisos de madeira não selados ou carpetes. Mantenha o ambiente ventilado durante o uso. Em caso de contato com os olhos, lave com água em abundância.'
    },
    {
      id: 14,
      nome: 'Removedor de Gordura',
      categoria: 'Cozinha',
      preco: 8.00,
      comoUsar: 'Borrife o produto diretamente na superfície engordurada. Deixe agir por 5-10 minutos. Limpe com um pano úmido ou esponja. Para sujeiras mais difíceis, pode ser necessário esfregar levemente.',
      recomendacoes: 'Use luvas ao manusear. Não use em superfícies sensíveis a produtos alcalinos, como alumínio ou mármore. Teste em uma área pequena antes de usar em superfícies pintadas.'
    },
    {
      id: 15,
      nome: 'Limpa Tapetes e Carpetes',
      categoria: 'Limpeza Geral',
      preco: 11.00,
      comoUsar: 'Aspire bem o tapete ou carpete. Dilua o produto conforme as instruções e aplique com um pano úmido ou escova macia. Deixe secar completamente e aspire novamente.',
      recomendacoes: 'Teste a resistência da cor em uma área discreta antes de usar. Não encharque o tapete ou carpete. Use em ambiente bem ventilado. Mantenha crianças e animais afastados até que a área esteja completamente seca.'
    },
    {
      id: 16,
      nome: 'Desengordurante para Fogão',
      categoria: 'Cozinha',
      preco: 7.50,
      comoUsar: 'Com o fogão frio, borrife o produto diretamente nas superfícies engorduradas. Deixe agir por 5-10 minutos. Limpe com um pano úmido ou esponja. Enxágue bem e seque com um pano limpo.',
      recomendacoes: 'Use luvas ao manusear. Não use em superfícies quentes. Evite o contato com os olhos e a pele. Em caso de contato, lave com água em abundância.'
    },
    {
      id: 17,
      nome: 'Limpa Inox',
      categoria: 'Cozinha',
      preco: 9.50,
      comoUsar: 'Aplique uma pequena quantidade do produto em um pano macio e limpo. Passe sobre a superfície de inox seguindo o sentido do acabamento. Passe um pano seco para dar brilho.',
      recomendacoes: 'Não use em superfícies que entram em contato direto com alimentos. Evite o uso em superfícies quentes. Mantenha fora do alcance de crianças.'
    },
    {
      id: 18,
      nome: 'Desentupidor de Pias e Ralos',
      categoria: 'Banheiro',
      preco: 12.00,
      comoUsar: 'Remova o excesso de água parada. Despeje lentamente o produto no ralo. Deixe agir por 15-30 minutos. Enxágue com água quente. Para obstruções severas, repita o processo.',
      recomendacoes: 'Use luvas e óculos de proteção. Não use em conjunto com outros produtos químicos. Mantenha o ambiente bem ventilado. Em caso de contato com a pele ou olhos, lave imediatamente com água em abundância e procure um médico.'
    },
    {
      id: 19,
      nome: 'Cera Líquida para Pisos',
      categoria: 'Limpeza Geral',
      preco: 13.50,
      comoUsar: 'Limpe bem o piso antes da aplicação. Espalhe uma camada fina e uniforme com um aplicador ou pano. Deixe secar por 30 minutos. Aplique uma segunda camada, se necessário.',
      recomendacoes: 'Não use em pisos de madeira não selados ou carpetes. O piso pode ficar escorregadio após a aplicação, tenha cuidado ao caminhar. Mantenha o ambiente ventilado durante a aplicação.'
    },
    {
      id: 20,
      nome: 'Limpa Ar Condicionado',
      categoria: 'Limpeza Geral',
      preco: 15.00,
      comoUsar: 'Desligue o aparelho. Remova os filtros e limpe-os separadamente. Borrife o produto no evaporador e nas aletas. Deixe agir por 10 minutos. Enxágue com água se necessário. Deixe secar antes de religar o aparelho.',
      recomendacoes: 'Use máscara e luvas durante a aplicação. Mantenha o ambiente bem ventilado. Não use em aparelhos ligados. Em caso de contato com os olhos, lave com água em abundância.'
    },
    {
      id: 21,
      nome: 'Removedor de Ferrugem',
      categoria: 'Limpeza Pesada',
      preco: 11.00,
      comoUsar: 'Aplique o produto diretamente na área enferrujada. Deixe agir por 15-20 minutos. Esfregue com uma escova ou palha de aço se necessário. Enxágue bem com água.',
      recomendacoes: 'Use luvas e óculos de proteção. Não use em superfícies pintadas ou galvanizadas. Teste em uma área pequena antes de usar. Mantenha fora do alcance de crianças.'
    },
    {
      id: 22,
      nome: 'Limpa Estofados',
      categoria: 'Limpeza Geral',
      preco: 14.50,
      comoUsar: 'Aspire bem o estofado. Dilua o produto conforme as instruções. Aplique com um pano úmido ou escova macia, evitando encharcar. Deixe secar naturalmente rcar. Deixe secar naturalmente e aspire novamente.',
      recomendacoes: 'Teste a resistência da cor em uma área discreta antes de usar. Não use em couro ou seda. Mantenha o ambiente bem ventilado durante o uso. Evite sentar no estofado até que esteja completamente seco.'
    },
    {
      id: 23,
      nome: 'Desincrustante para Vaso Sanitário',
      categoria: 'Banheiro',
      preco: 9.00,
      comoUsar: 'Aplique o produto uniformemente nas bordas internas do vaso. Deixe agir por 30 minutos a 1 hora. Esfregue com escova sanitária e dê descarga.',
      recomendacoes: 'Use luvas e máscara. Não misture com outros produtos de limpeza, especialmente à base de cloro. Mantenha o banheiro ventilado durante o uso. Em caso de contato com a pele, lave imediatamente com água em abundância.'
    },
    {
      id: 24,
      nome: 'Limpa Pedras e Cerâmicas',
      categoria: 'Área Externa',
      preco: 16.00,
      comoUsar: 'Dilua o produto conforme as instruções. Aplique na superfície com um pano, mop ou vassoura. Deixe agir por 10-15 minutos. Esfregue se necessário e enxágue bem com água.',
      recomendacoes: 'Use luvas e botas de borracha. Não aplique em superfícies quentes ou expostas ao sol. Mantenha plantas e animais afastados durante a aplicação e enxágue.'
    },
    {
      id: 25,
      nome: 'Removedor de Mofo',
      categoria: 'Limpeza Pesada',
      preco: 13.00,
      comoUsar: 'Borrife o produto diretamente na área afetada. Deixe agir por 15-20 minutos. Esfregue com uma escova se necessário. Enxágue bem com água limpa e seque a área.',
      recomendacoes: 'Use luvas, máscara e óculos de proteção. Mantenha o ambiente bem ventilado. Não misture com outros produtos químicos. Em caso de contato com a pele, lave imediatamente com água em abundância.'
    },
    {
      id: 26,
      nome: 'Sabonete Líquido para as Mãos',
      categoria: 'Higiene Pessoal',
      preco: 5.50,
      comoUsar: 'Umedeça as mãos com água. Aplique uma pequena quantidade do produto. Esfregue bem por pelo menos 20 segundos. Enxágue com água corrente e seque.',
      recomendacoes: 'Mantenha fora do alcance de crianças. Em caso de contato com os olhos, lave com água em abundância. Se ocorrer irritação, suspenda o uso e consulte um médico.'
    },
    {
      id: 27,
      nome: 'Limpa Alumínio',
      categoria: 'Cozinha',
      preco: 7.00,
      comoUsar: 'Dilua o produto conforme as instruções. Aplique com uma esponja macia ou pano. Esfregue suavemente e enxágue bem com água limpa. Seque com um pano macio para evitar manchas.',
      recomendacoes: 'Use luvas ao manusear. Não deixe o produto secar sobre a superfície. Não use em utensílios que entram em contato direto com alimentos. Mantenha fora do alcance de crianças.'
    },
    {
      id: 28,
      nome: 'Desodorizador de Ambientes',
      categoria: 'Limpeza Geral',
      preco: 8.50,
      comoUsar: 'Agite bem antes de usar. Borrife no ar, longe de pessoas e animais. Para melhores resultados, aplique em diferentes pontos do ambiente.',
      recomendacoes: 'Não borrife diretamente sobre pessoas, animais, alimentos ou chamas. Use em ambientes ventilados. Em caso de contato com os olhos, lave com água em abundância.'
    },
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
