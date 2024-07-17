import { TextService } from './../../services/text.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {
  @Input() flow: string = '';
  @Input() segment: string = '';
  text: string = '';

  constructor(private textService: TextService) { }

  ngOnInit(): void {
    this.text = this.textService.getText(this.flow, this.segment);
  }
}
