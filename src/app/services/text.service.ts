import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextService {
  private texts: { [key: string]: { [segment: string]: string } } = {
    'isca': {
      '3': 'Texto para isca segmento 3',
      '4': 'Texto para isca segmento 4',
      '5': 'Texto para isca segmento 5'
    },
    'cartonista': {
      '3': 'Texto para cartonista segmento 3',
      '4': 'Texto para cartonista segmento 4',
      '5': 'Texto para cartonista segmento 5'
    },
    'laranja': {
      '3': 'Texto para laranja segmento 3',
      '4': 'Texto para laranja segmento 4',
      '5': 'Texto para laranja segmento 5'
    }
  };

  getText(flow: string, segment: string): string {
    return this.texts[flow]?.[segment] || 'Texto padrão';
  }
}
