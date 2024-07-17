import { Component, OnInit, Input } from '@angular/core';
import { TextService } from '../../services/text.service';

@Component({
  selector: 'app-bem-vindo',
  templateUrl: './bem-vindo.component.html',
  styleUrls: ['./bem-vindo.component.css']
})
export class BemVindoComponent implements OnInit {
  @Input() flow: string = '';
  @Input() segment: string = '';
  text: string = '';

  constructor(private textService: TextService) { }

  ngOnInit(): void {
    this.text = this.textService.getText(this.flow, this.segment);
  }
}
