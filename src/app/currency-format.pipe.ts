import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})

export class CurrencyFormatPipe implements PipeTransform {
  transform(value: number): string {
    if (value == null) return '';
    const formatarValor = value
    .toFixed(2)
    .replace('.', ',')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `R$ ${formatarValor}`;
  }
}