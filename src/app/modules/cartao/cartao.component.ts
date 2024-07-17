import { Component, Input, OnInit } from '@angular/core';
import { TextService } from '../../services/text.service';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css']
})
export class CartaoComponent implements OnInit {

  @Input() flow: string = '';
  @Input() segment: string = '';
  text: string = '';

  constructor(private textService: TextService) { }

  ngOnInit(): void {
    this.text = this.textService.getText(this.flow, this.segment);
  }

}
