import { Component, OnInit } from '@angular/core';
import { FlowService } from '../../services/flow.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  modulesOrder: number[] = [];
  segmentColorClass: string = '';
  currentFlow: string = '';
  currentSegment: string = '';
  modulesMap: { [key: number]: string } = {
    1: 'bem-vindo',
    2: 'produto',
    3: 'cartao',
    4: 'conta'
  };

  constructor(private flowService: FlowService) { }

  ngOnInit() {
    const flow = 'isca';  // Pode ser dinâmico
    const segment = '4';  // Pode ser dinâmico

    this.loadModulesAndSetColor(flow, segment);
  }

  loadModulesAndSetColor(flow: string, segment: string) {
    console.log(`Fluxo: ${flow}, Segmento: ${segment}`);

    this.flowService.getModuleOrder(flow, segment).subscribe(({ order, segment: validSegment }) => {
      this.modulesOrder = order;
      this.segmentColorClass = this.flowService.getSegmentColorClass(validSegment);
      this.currentFlow = flow; // Armazena o fluxo atual
      this.currentSegment = validSegment; // Armazena o segmento válido
      console.log(`Ordem de renderização: ${this.modulesOrder}, Segmento válido: ${validSegment}`);
    });
  }
}
