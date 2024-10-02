import { Component } from '@angular/core';

import { MetasCampanhasService } from '../shared/metas-campanhas.service';

@Component({
  selector: 'app-detalhes-optin-campanha',
  templateUrl: './detalhes-optin-campanha.component.html',
  styleUrls: ['./detalhes-optin-campanha.component.scss']
})
export class DetalhesOptinCampanhaComponent {
  // seleção dos cards
  metasCampanhas: any[] = [];
  valorSelecionado: number | null = null; // Armazena o valor do botão selecionado
  objetivoConfirmado: boolean = false; // Controla o estado de confirmação do objetivo
  metasConcluidas: boolean[] = new Array(this.metasCampanhas.length).fill(false); // armazenar cards com as metas concluídas    
  metaSelecionada: (number | null)[] = new Array(this.metasCampanhas.length).fill(null); // armazenar meta selecionada para cada card
  percentualConcluido: number[] = []; // calculo de metas (ainda em análise)
  inicioCard: number = 0;
  cardsPorPagina: number = 3;

  constructor(private metasCampanhasService: MetasCampanhasService) { }

  ngOnInit() {
    // Obtendo os dados do serviço
    this.metasCampanhas = this.metasCampanhasService.getMetasOptin();

    console.log(this.metasCampanhas);
  }

  // Selecionar valor de meta
  selecionarMeta(valorMeta: number, cardAtual: number, metaCardAtual: number) {
    // Verifica se o valor de meta já está selecionado
    if (this.metaSelecionada[cardAtual] === metaCardAtual) {
      // retirar seleção da meta
      this.metaSelecionada[cardAtual] = null;
      this.percentualConcluido[cardAtual] = 0;
      this.desativarConfirmar(cardAtual);
    } else {
      // nova meta
      this.metaSelecionada[cardAtual] = metaCardAtual;
      this.ativarConfirmar(cardAtual);
    }
    // Atualiza o valor da meta selecionada para o card atual
    this.valorSelecionado = valorMeta;
    console.log(`Meta ${metaCardAtual} selecionada: ${valorMeta}`);
    console.log(`Porcentagem concluída para o card ${cardAtual}: ${this.percentualConcluido[cardAtual]}%`);
  }

  // ativar botão confirmar objetivo
  ativarConfirmar(cardAtual: number) {
    const confirmarButton = document.getElementById(`confirmarObjetivo-${cardAtual}`);
    if (confirmarButton) {
      confirmarButton.removeAttribute('disabled');
      confirmarButton.classList.add('active');
    }
  }

  // Desativar o botão confirmar objetivo
  desativarConfirmar(cardAtual: number) {
    const confirmarButton = document.getElementById(`confirmarObjetivo-${cardAtual}`);
    if (confirmarButton) {
      confirmarButton.setAttribute('disabled', 'true');
      confirmarButton.classList.remove('active');
    }
  }

  // confirmar o objetivo e alternar a exibição dos cards
  confirmarObjetivo(cardAtual: number) {
    this.objetivoConfirmado = true;
    const metasDiv = document.querySelector(`.infos-metas-${cardAtual}`);
    const objetivoDiv = document.querySelector(`.infos-objetivo-${cardAtual}`);

    if (metasDiv && objetivoDiv) {
      metasDiv.classList.add('d-none');
      objetivoDiv.classList.add('show');
    }
  }

  // exibir novamente as metas
  mudarObjetivo(cardAtual: number) {
    const metasDiv = document.querySelector(`.infos-metas-${cardAtual}`);
    const objetivoDiv = document.querySelector(`.infos-objetivo-${cardAtual}`);

    if (metasDiv && objetivoDiv) {
      metasDiv.classList.remove('d-none');
      objetivoDiv.classList.remove('show');
    }
  }
}