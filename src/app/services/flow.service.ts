import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlowService {
  constructor() {}

  getModuleOrder(flow: string, segment: string) {
    const orders: ModuleOrder = {
      isca: {
        '3': [1, 2, 3, 4],
        '4': [1, 3, 2, 4],
        '5': [3, 2, 4],
      },
      cartonista: {
        '3': [3, 4, 2, 1],
        '4': [1, 4, 3, 2],
      },
      laranja: {
        '3': [1, 3],
        '4': [1, 2],
      },
      walsh: {
        '3': [1, 2, 3, 4],
        '4': [1, 2],
        '5': [1, 2],
      },
    };

    const defaultFlows: { [key: string]: string } = {
      'default': 'isca', // Flow padrão
    };

    const defaultSegments: { [key: string]: string } = {
      isca: '3',
      cartonista: '3',
      laranja: '3',
    };

    const defaultFlow = defaultFlows['default'];
    const flowToUse = orders[flow] ? flow : defaultFlow;
    const segmentToUse = orders[flowToUse][segment] ? segment : defaultSegments[flowToUse];

    const order = orders[flowToUse][segmentToUse];

    console.log(`Fluxo: ${flowToUse}, Segmento: ${segmentToUse}, Ordem: ${order}`);
    return of({ order, segment: segmentToUse });
  }

  getSegmentColorClass(segment: string) {
    const segmentColors: { [key: string]: string } = {
      '3': 'laranja-claro',
      '4': 'azul-claro',
      '5': 'azul-escuro',
    };

    return segmentColors[segment] || 'default-color'; // Classe padrão, se necessário
  }
}

interface ModuleOrder {
  [key: string]: {
    [segment: string]: number[];
  };
}
