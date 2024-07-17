import { Component, OnInit, Input } from '@angular/core';
import { TextService } from '../../services/text.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  @Input() flow: string = '';
  @Input() segment: string = '';
  text: string = '';

  constructor(private textService: TextService) { }

  ngOnInit(): void {
    this.text = this.textService.getText(this.flow, this.segment);
  }
}
