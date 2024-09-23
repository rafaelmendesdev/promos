import { Component } from '@angular/core';
import { MetasCampanhasService } from '../shared/metas-campanhas.service';
import { METAS_INFOS_ESTATICOS } from '../data/metas-campanha';
import { CLIENTE } from '../data/cliente';
@Component({
  selector: 'app-detalhes-optin-campanha',
  templateUrl: './detalhes-optin-campanha.component.html',
  styleUrls: ['./detalhes-optin-campanha.component.scss']
})
export class DetalhesOptinCampanhaComponent {
  selectedValue: number | null = null; // Armazena o valor do botão selecionado
  objetivoConfirmado: boolean = false; // Controla o estado de confirmação do objetivo
  inicioCard: number = 0;
  cardsPorPagina: number = 3;
  metasCampanhas: any[] = [];
  cliente = CLIENTE;
  metasInfosEstaticos = METAS_INFOS_ESTATICOS;
  metasConcluidas: boolean[] = new Array(this.metasCampanhas.length).fill(false); // armazenar cards com as metas concluídas    
  metaSelecionada: (number | null)[] = new Array(this.metasCampanhas.length).fill(null); // armazenar meta selecionada para cada card
  percentualConcluido: number[] = [];

  constructor(private metasCampanhasService: MetasCampanhasService) { }

  ngOnInit() {
    // Obtendo os dados do serviço
    this.metasCampanhas = this.metasCampanhasService.getMetasOptin();
  }

  // Selecionar valor de meta
  selecionarMeta(valorMeta: number, cardIndex: number, metaIndex: number) {
    // Verifica se o valor de meta já está selecionado
    if (this.metaSelecionada[cardIndex] === metaIndex) {
      // retirar seleção da meta
      this.metaSelecionada[cardIndex] = null;
      this.percentualConcluido[cardIndex] = 0;
      this.desativarConfirmacao(cardIndex);
    } else {
      // nova meta
      this.metaSelecionada[cardIndex] = metaIndex;
      this.percentualConcluido[cardIndex] = this.calcularPorcentagem(valorMeta);
      this.ativarConfirmacao(cardIndex);
    }
    // Atualiza o valor da meta selecionada para o card atual
    this.selectedValue = valorMeta;
    console.log(`Meta ${metaIndex} selecionada: ${valorMeta}`);
    console.log(`Porcentagem concluída para o card ${cardIndex}: ${this.percentualConcluido[cardIndex]}%`);
  }

  // ativar botão confirmar objetivo
  ativarConfirmacao(cardIndex: number) {
    const confirmarButton = document.getElementById(`confirmarObjetivo-${cardIndex}`);
    if (confirmarButton) {
      confirmarButton.removeAttribute('disabled');
      confirmarButton.classList.add('active');
    }
  }

  // Desativar o botão confirmar objetivo
  desativarConfirmacao(cardIndex: number) {
    const confirmarButton = document.getElementById(`confirmarObjetivo-${cardIndex}`);
    if (confirmarButton) {
      confirmarButton.setAttribute('disabled', 'true');
      confirmarButton.classList.remove('active');
    }
  }

  // confirmar o objetivo e alternar a exibição dos cards
  confirmarObjetivo(cardIndex: number) {
    this.objetivoConfirmado = true;
    const metasDiv = document.querySelector(`.infos-metas-${cardIndex}`);
    const objetivoDiv = document.querySelector(`.infos-objetivo-${cardIndex}`);

    if (metasDiv && objetivoDiv) {
      metasDiv.classList.add('d-none');
      objetivoDiv.classList.add('show');
    }
  }

  // calculo porcentagem
  calcularPorcentagem(meta: number): number {
    return Math.round((this.cliente.comprasCartao / meta) * 100);
  }

  // exibir novamente as metas
  mudarObjetivo(cardIndex: number) {
    const metasDiv = document.querySelector(`.infos-metas-${cardIndex}`);
    const objetivoDiv = document.querySelector(`.infos-objetivo-${cardIndex}`);

    if (metasDiv && objetivoDiv) {
      metasDiv.classList.remove('d-none');
      objetivoDiv.classList.remove('show');
    }
  }

  get visualizarCards() {
    return this.metasCampanhas.slice(this.inicioCard, this.inicioCard + 3);
  }

  get transformStyle(): string {
    return `translateX(-${(this.inicioCard / this.metasCampanhas.length) * 100}%)`;
  }

  proximoCard() { 
    if (this.inicioCard < this.metasCampanhas.length - 3) {
      this.inicioCard++;
    }
  }

  voltarCard() {
    if (this.inicioCard > 0) {
      this.inicioCard--;
    }
  }

  isVisible(index: number): boolean {
    return index >= this.inicioCard && index < this.inicioCard + 3;
  }
}